// ============================================================
// 参考书登记表 —— 老师只需要编辑这个文件
// 每新增一本书：把 epub/pdf 文件放进 materials/ 文件夹，
// 然后照下面的格式添加一条记录即可。
// type 为 "link" 时，file 填外部网址（用于在线阅读链接）。
// ============================================================

const COURSE_FILES = [
  {
    lesson: "参考书",
    title: "物种起源（苗德岁 译）",
    file: "物种起源 (（英）达尔文（Darwin，C.）著，苗德岁译).epub",
    type: "epub",
    desc: "进化论的奠基之作。达尔文以大量证据论证物种经自然选择逐渐演变。苗德岁译本以 1860 年第二版（即牛津世界经典丛书 2008 修订版）为蓝本——第二版与 1859 年第一版几乎相同、仅作少量勘误，而与其他通行中译本所据的 1872 年第六版差别很大，被认为最适合体现达尔文的原始论证。语言严谨且附译注，适合作为中文阅读的首选版本。"
  },
  {
    lesson: "参考书",
    title: "On the Origin of Species (Oxford World's Classics)",
    file: "On the Origin of Species (Oxford Worlds Classics) (Charles Darwin Gillian Beer).epub",
    type: "epub",
    desc: "《物种起源》1860 年第二版原文（牛津世界经典丛书）。第二版与 1859 年第一版几乎相同、仅作少量勘误，被认为最能体现达尔文的原始论证，也是当今学者最推崇的版本；Gillian Beer 的导读介绍了本书的写作背景与思想史地位。"
  },
  {
    lesson: "参考书",
    title: "小猎犬号航海记（中译本）",
    file: "小猎犬号航海记（没有《小猎犬号航海记》，就没有《物种起源》，改变人类历史进程的杰作） (查尔斯•达尔文 [查尔斯•达尔文]) .epub",
    type: "epub",
    desc: "1831–1836 年贝格尔号环球航行中，年轻的达尔文以博物学家身份记录的所见所闻：南美洲的地质、化石、动植物分布与原住民。加拉帕戈斯群岛等地的观察正是《物种起源》思想的起点。这本游记生动易读，是了解达尔文如何成为达尔文的最佳入门。"
  },
  {
    lesson: "参考书",
    title: "A Naturalist's Voyage Round the World (Voyage of the Beagle)",
    file: "A Naturalist’s Voyage Round the World  The Voyage of the Beagle (Charles Darwin).epub",
    type: "epub",
    desc: "《小猎犬号航海记》英文原版。叙述节奏从容，观察细节丰富，既是科学考察报告，也是优秀的旅行文学。可与中译本对照阅读，体会达尔文原文的表述与推理方式。"
  },
  {
    lesson: "参考书",
    title: "Principles of Geology",
    file: "Principles of Geology (Charles Lyell, James A. Secord).epub",
    type: "epub",
    desc: "赖尔的地质学经典，系统阐述均变论：地球的变迁由至今仍在作用的缓慢过程累积而成，无需诉诸灾变。达尔文航行时随身携带此书，其“长时间、渐变化”的思维方式为进化论提供了关键的时空框架。读懂赖尔，才能理解达尔文理论从何而来。"
  },
  {
    lesson: "参考书",
    title: "The Zoology of the Voyage of H.M.S. Beagle [Vol. 3/5]",
    file: "The Zoology of the voyage of H.M.S. Beagle [Vol. 3 of 5] (Charles Darwin).epub",
    type: "epub",
    desc: "贝格尔号航行动物志（全五卷之第三卷，鸟类部分），由达尔文提供笔记、专家执笔描述的官方考察报告，收录大量物种描述与分布记录。适合对生物地理学、鸟类学或科学史感兴趣的同学查阅原始材料。"
  }
];
