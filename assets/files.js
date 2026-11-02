// ============================================================
// 参考书登记表 —— 老师只需要编辑这个文件
// 排序：按原版首次出版时间，中文译本紧挨其原版
// 每新增一本书：把 epub/pdf 文件放进 materials/ 文件夹，
// 然后照下面的格式添加一条记录即可。
// type 为 "link" 时，file 填外部网址（用于在线阅读链接）。
// 英文原著可加 level 字段（CEFR 欧标英语难度，如 "B2"），页面会显示徽标；
// 中文译本不加 level。
// ============================================================

const COURSE_FILES = [
  {
    lesson: "参考书",
    title: "Principles of Geology",
    file: "Principles of Geology (Charles Lyell, James A. Secord).epub",
    type: "epub",
    level: "C1–C2",
    desc: "赖尔《地质学原理》（1830–1833，James A. Secord 编辑版）。达尔文随贝格尔号航行时携带的书，均变论思想的重要源头。"
  },
  {
    lesson: "参考书",
    title: "A Naturalist's Voyage Round the World (Voyage of the Beagle)",
    file: "A Naturalist’s Voyage Round the World  The Voyage of the Beagle (Charles Darwin).epub",
    type: "epub",
    level: "C1",
    desc: "《小猎犬号航海记》英文原版（1839）。叙述节奏从容，观察细节丰富，既是科学考察报告，也是优秀的旅行文学。"
  },
  {
    lesson: "参考书",
    title: "小猎犬号航海记（中译本）",
    file: "小猎犬号航海记（没有《小猎犬号航海记》，就没有《物种起源》，改变人类历史进程的杰作） (查尔斯•达尔文 [查尔斯•达尔文]) .epub",
    type: "epub",
    desc: "《小猎犬号航海记》中译本。1831–1836 年贝格尔号环球航行中，年轻的达尔文以博物学家身份记录的所见所闻：南美洲的地质、化石、动植物分布与原住民。加拉帕戈斯群岛等地的观察正是《物种起源》思想的起点。这本游记生动易读，是了解达尔文如何成为达尔文的最佳入门。"
  },
  {
    lesson: "参考书",
    title: "The Zoology of the Voyage of H.M.S. Beagle [Vol. 3/5]",
    file: "The Zoology of the voyage of H.M.S. Beagle [Vol. 3 of 5] (Charles Darwin).epub",
    type: "epub",
    level: "C2（专业文献）",
    desc: "贝格尔号航行动物志（1838–1843，全五卷之第三卷，鸟类部分），由达尔文提供笔记、专家执笔描述的官方考察报告，收录大量物种描述与分布记录。适合对生物地理学、鸟类学或科学史感兴趣的同学查阅原始材料。"
  },
  {
    lesson: "参考书",
    title: "On the Origin of Species (Oxford World's Classics)",
    file: "On the Origin of Species (Oxford Worlds Classics) (Charles Darwin Gillian Beer).epub",
    type: "epub",
    level: "C1",
    desc: "《物种起源》1860 年第二版原文（牛津世界经典丛书）。第二版与 1859 年第一版几乎相同、仅作少量勘误，被认为最能体现达尔文的原始论证，也是当今学者最推崇的版本；Gillian Beer 的导读介绍了本书的写作背景与思想史地位。"
  },
  {
    lesson: "参考书",
    title: "物种起源（苗德岁 译）",
    file: "物种起源 (（英）达尔文（Darwin，C.）著，苗德岁译).epub",
    type: "epub",
    desc: "进化论的奠基之作。达尔文以大量证据论证物种经自然选择逐渐演变。苗德岁译本以 1860 年第二版（即牛津世界经典丛书 2008 修订版）为蓝本——第二版与 1859 年第一版几乎相同、仅作少量勘误，而与其他通行中译本所据的 1872 年第六版差别很大，被认为最适合体现达尔文的原始论证。语言严谨且附译注，适合作为中文阅读的首选版本。"
  },
  {
    lesson: "参考书",
    title: "Evidence as to Man's Place in Nature",
    file: "Evidence as to Man’s Place in Nature (Thomas Henry Huxley).pdf",
    type: "pdf",
    level: "C1",
    desc: "赫胥黎 1863 年的名著（剑桥图书馆典藏影印版）。作为达尔文进化论最坚定的支持者，赫胥黎以比较解剖学和胚胎学证据论证人与类人猿的亲缘关系，书中著名的“人猿同祖”论战直接回应了当时对进化论的争议。"
  },
  {
    lesson: "参考书",
    title: "The Descent of Man, and Selection in Relation to Sex",
    file: "The Descent of Man (Charles Darwin).pdf",
    type: "pdf",
    level: "C1–C2",
    desc: "达尔文 1871 年发表的《人类的由来及性选择》（1874 年第二版），首次系统地把进化论应用于人类：论证人类源自低等祖先、讨论人类种族的差异，并以大量篇幅阐述性选择理论。原版影印 PDF。"
  },
  {
    lesson: "参考书",
    title: "科学元典套装（五册合订）",
    file: "《基因论》 《人类的由来及性选择》 《人类与动物心理学讲义》 《人类在自然界的位置》《人类和动物的表情》.epub",
    type: "epub",
    desc: "五部科学经典的中译合订本，除达尔文的《人类的由来及性选择》《人类和动物的表情》外，还包括：摩尔根《基因论》（经典遗传学的奠基之作）、赫胥黎《人类在自然界的位置》（全译本）、冯特《人类与动物心理学讲义》（科学心理学的开山讲演）。"
  },
  {
    lesson: "参考书",
    title: "The Selfish Gene, 40th Anniversary Edition",
    file: "The Selfish Gene, 40th Anniversary Edition (Richard Dawkins).epub",
    type: "epub",
    level: "B2",
    desc: "道金斯 1976 年的经典之作《自私的基因》英文原版（40 周年纪念版）。以基因中心的视角重新诠释进化：个体只是基因的“生存机器”，自然选择的基本单位是基因。书中提出的“模因（meme）”概念影响远超生物学。纪念版含道金斯新撰的序言与尾注。"
  },
  {
    lesson: "参考书",
    title: "自私的基因（40 周年增订版 中译本）",
    file: "自私的基因：40周年增订版 (理查德．道金斯 (Richard Dawkins)).epub",
    type: "epub",
    desc: "《自私的基因》中译本（40 周年增订版）。行文流畅，除正文外还收录道金斯为纪念版撰写的序言与尾注，是中文读者了解基因中心进化观与“模因”思想的最佳入门。"
  },
  {
    lesson: "参考书",
    title: "The Island of Doctor Moreau",
    file: "The Island of Doctor Moreau (H. G. Wells).epub",
    type: "epub",
    level: "B1–B2",
    desc: "威尔斯 1896 年的科幻经典（公版原版，来自 Project Gutenberg）。流落荒岛的海难幸存者逐渐发现：岛上由动物改造而成的“兽人”都出自莫罗博士的活体实验之手。情节紧张、篇幅较短，探讨科学伦理与“人性”的边界，是英语原著阅读入门的理想之选。"
  }
];
