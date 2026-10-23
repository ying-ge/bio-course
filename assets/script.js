/* 根据 files.js 的记录生成书目卡片列表 */

const MATERIALS = "../materials/";

function hrefOf(f) {
  return f.type === "link" ? f.file : MATERIALS + f.file;
}

const box = document.getElementById("list");

/* 组标题（含下载提示） */
const groups = [...new Set(COURSE_FILES.map(f => f.lesson))];
if (groups.length > 0) {
  const h = document.createElement("h2");
  h.className = "group-title";
  h.innerHTML = `${groups[0]} <span>（点击书名即可下载）</span>`;
  box.appendChild(h);
  const note = document.createElement("p");
  note.className = "sort-note";
  note.textContent = "书目按原版首次出版时间排序，中文译本紧随其原版。";
  box.appendChild(note);
}

COURSE_FILES.forEach(f => {
  const div = document.createElement("div");
  div.className = "item";

  const row = document.createElement("div");
  row.className = "row";
  const a = document.createElement("a");
  a.href = hrefOf(f);
  a.textContent = f.title;
  const tag = document.createElement("small");
  tag.textContent = f.type === "link" ? "外部链接" : f.type.toUpperCase();
  a.appendChild(tag);
  if (f.type === "link") a.target = "_blank";
  else a.setAttribute("download", "");
  row.appendChild(a);
  div.appendChild(row);

  if (f.desc) {
    const p = document.createElement("p");
    p.className = "desc";
    p.textContent = f.desc;
    div.appendChild(p);
  }
  box.appendChild(div);
});
