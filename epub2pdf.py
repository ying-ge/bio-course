#!/usr/bin/env python
"""将 On the Origin of Species (Oxford World's Classics) EPUB 转为可打印 PDF。
用法: .pdfenv/bin/python epub2pdf.py
输出: materials/On the Origin of Species (Oxford Worlds Classics).pdf
"""
import re, html, zipfile
from xml.etree import ElementTree as ET
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

EPUB = "materials/On the Origin of Species (Oxford Worlds Classics) (Charles Darwin Gillian Beer).epub"
OUT  = "materials/On the Origin of Species (Oxford Worlds Classics).pdf"
NS = {"xhtml": "http://www.w3.org/1999/xhtml", "opf": "http://www.idpf.org/2007/opf"}

z = zipfile.ZipFile(EPUB)

# 按 spine 顺序取阅读流
opf_name = [n for n in z.namelist() if n.endswith(".opf")][0]
opf = ET.fromstring(z.read(opf_name))
base = opf_name.rsplit("/", 1)[0] + "/" if "/" in opf_name else ""
manifest = {i.get("id"): i.get("href") for i in opf.findall("opf:manifest/opf:item", NS)}
order = [manifest[r.get("idref")] for r in opf.findall("opf:spine/opf:itemref", NS)]

# href 是相对 ops/ 的，直接在 zip 名单里解析
all_names = set(z.namelist())

def resolve(href):
    for cand in (base + href, href,
                 base + href.replace("../", ""), "ops/" + href):
        if cand in all_names:
            return cand
    return None

body = ParagraphStyle("body", fontName="Times-Roman", fontSize=11, leading=16,
                      spaceAfter=7, firstLineIndent=18, alignment=4)
h1 = ParagraphStyle("h1", fontName="Times-Bold", fontSize=16, leading=20,
                    spaceBefore=18, spaceAfter=12, alignment=1)
h2 = ParagraphStyle("h2", fontName="Times-Bold", fontSize=13, leading=17,
                    spaceBefore=14, spaceAfter=8)
blockq = ParagraphStyle("bq", parent=body, leftIndent=20, firstLineIndent=0,
                        fontName="Times-Italic")
CENTER, LEFT, JUST = 1, 0, 4

BLOCK = {"p": body, "h1": h1, "h2": h2, "h3": h2, "blockquote": blockq,
         "li": body}
head_pat = re.compile(r"^(h[1-6])$")

def walk(el, flow):
    tag = el.tag.split("}")[-1]
    if tag == "img":
        return
    if tag in ("p", "blockquote", "li") or head_pat.match(tag):
        text = html.unescape(re.sub(r"<[^>]+>", "", ET.tostring(
            el, encoding="unicode")).strip())
        # 合并断裂空白
        text = re.sub(r"\s+", " ", text)
        if text:
            st = BLOCK.get(tag, body)
            if head_pat.match(tag):
                st = h2 if tag in ("h2", "h3") else h1
            if text.startswith("Chapter ") and len(text) < 60:
                st = h1
            flow.append(Paragraph(text, st))
        return
    for c in el:
        walk(c, flow)

flow = []
for href in order:
    path = resolve(href)
    if not path:
        continue
    try:
        raw = z.read(path)
        try:
            doc = ET.fromstring(raw)
        except ET.ParseError:
            # 去掉未转义的 & 等问题后重试
            import html as _h
            fixed = re.sub(rb"&(?!amp;|lt;|gt;|quot;|apos;|#)", b"&amp;", raw)
            doc = ET.fromstring(fixed)
    except (KeyError, ET.ParseError) as e:
        print("skip", path, e)
        continue
    for el in doc.iter():
        if el.tag.split("}")[-1] == "body":
            walk(el, flow)
            break

doc = SimpleDocTemplate(OUT, pagesize=A4,
                        leftMargin=2.2*cm, rightMargin=2.2*cm,
                        topMargin=2.2*cm, bottomMargin=2.2*cm,
                        title="On the Origin of Species")
doc.build(flow)
print("done:", OUT, "paragraphs:", len(flow))
