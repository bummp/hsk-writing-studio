const levels = {
  hsk1: {
    label: "HSK 1",
    time: "建议用时：10 分钟",
    range: [40, 80],
    sentenceMin: 3,
    connectorTarget: 1,
    description: "能用简单词语和短句介绍自己、家人、时间、地点和日常活动。",
    rubric: "重点关注基本词语、简单句、常用标点和意思是否清楚。"
  },
  hsk2: {
    label: "HSK 2",
    time: "建议用时：15 分钟",
    range: [80, 120],
    sentenceMin: 5,
    connectorTarget: 2,
    description: "能围绕熟悉生活话题写出较完整的短文，表达基本事实和感受。",
    rubric: "重点关注句子完整、常用连接词、时间地点表达和基础语法准确性。"
  },
  hsk3: {
    label: "HSK 3",
    time: "建议用时：20 分钟",
    range: [120, 180],
    sentenceMin: 6,
    connectorTarget: 3,
    description: "能描述学习、工作、生活经历，并表达简单理由和看法。",
    rubric: "重点关注内容切题、段落顺序、常用句式和词汇丰富度。"
  },
  hsk4: {
    label: "HSK 4",
    time: "建议用时：25 分钟",
    range: [180, 260],
    sentenceMin: 8,
    connectorTarget: 4,
    description: "能围绕社会生活和学习话题表达观点，说明原因并举例。",
    rubric: "重点关注观点明确、论证连贯、复句使用和表达自然度。"
  },
  hsk5: {
    label: "HSK 5",
    time: "建议用时：35 分钟",
    range: [300, 450],
    sentenceMin: 10,
    connectorTarget: 5,
    description: "能写较完整的议论或说明性短文，表达较复杂的观点和态度。",
    rubric: "重点关注结构完整、论述充分、词汇准确、书面语表达和语法控制。"
  },
  hsk6: {
    label: "HSK 6",
    time: "建议用时：40 分钟",
    range: [450, 650],
    sentenceMin: 12,
    connectorTarget: 6,
    description: "能围绕抽象或社会性话题进行较深入表达，语言较准确流畅。",
    rubric: "重点关注思想深度、篇章组织、语言得体性、复杂句式和错误控制。"
  }
};

const topics = {
  hsk1: [
    {
      title: "介绍自己",
      keywords: ["我", "名字", "学生", "老师", "中国", "学习"],
      body: [
        "请用中文写一段话介绍自己。",
        "内容可以包括：你的名字、国家、学习中文的时间、喜欢做什么。",
        "Write a short self-introduction in Chinese."
      ],
      sample: "大家好！我叫安娜。我是学生，我来自法国。现在我在中国学习中文。我喜欢中文，也喜欢中国菜。我的老师很好，我的同学也很友好。"
    },
    {
      title: "我的一天",
      keywords: ["早上", "中午", "晚上", "上课", "吃饭", "学习"],
      body: [
        "请写一写你一天的生活。",
        "可以写早上、中午、晚上做什么。"
      ],
      sample: "我早上七点起床，然后去上课。中午我和同学一起吃饭。下午我学习中文，晚上我看书。我觉得今天很开心。"
    }
  ],
  hsk2: [
    {
      title: "我的中文老师",
      keywords: ["老师", "中文", "上课", "帮助", "学习", "喜欢"],
      body: [
        "请介绍一位你的中文老师。",
        "内容可以包括：老师的样子、上课方式、你为什么喜欢这位老师。"
      ],
      sample: "我的中文老师姓李。她每天都很早来教室。她上课的时候说话很清楚，也常常帮助我们练习发音。我觉得她很认真，所以我很喜欢上中文课。"
    },
    {
      title: "一次买东西的经历",
      keywords: ["商店", "买", "多少钱", "喜欢", "选择", "付款"],
      body: [
        "请写一次你买东西的经历。",
        "可以写你买了什么、在哪里买、价格怎么样。"
      ],
      sample: "昨天我去学校旁边的商店买东西。我想买一个杯子，店里有很多颜色。最后我买了一个蓝色的杯子，三十五块钱。我觉得不贵。"
    }
  ],
  hsk3: [
    {
      title: "校园生活",
      keywords: ["学校", "教室", "图书馆", "食堂", "同学", "学习", "中文"],
      body: [
        "请写一篇短文，介绍你在中国校园里的学习和生活。",
        "内容应包括：你常去的地方、你喜欢的活动、你遇到的困难和解决方法。"
      ],
      sample: "我现在在中国的一所大学学习中文。每天早上我去教室上课，下午常常去图书馆看书。学校的食堂很方便，我可以吃到很多不同的中国菜。刚开始的时候，我听不懂老师说的话，但是同学们经常帮助我。现在我越来越喜欢校园生活，也更有信心学好中文。"
    },
    {
      title: "一次难忘的旅行",
      keywords: ["旅行", "城市", "朋友", "风景", "照片", "难忘"],
      body: [
        "请写一次你难忘的旅行。",
        "内容应包括：去了哪里、和谁一起去、看到了什么、为什么难忘。"
      ],
      sample: "上个月我和朋友一起去了杭州旅行。那里的风景很美，特别是西湖。我们坐船、拍照片，还吃了当地的菜。虽然那天下雨了，但是我们玩得很开心。这次旅行让我了解了更多中国文化，所以我觉得很难忘。"
    }
  ],
  hsk4: [
    {
      title: "手机对学习的影响",
      keywords: ["手机", "学习", "影响", "方便", "注意力", "合理"],
      body: [
        "有人认为手机能帮助学习，也有人认为手机会影响学习。",
        "请谈谈你的看法，并说明理由。"
      ],
      sample: "手机对学习既有帮助，也有影响。首先，手机可以帮助我们快速查资料，还可以用来听中文录音、看教学视频。其次，很多学习软件很方便，学生可以随时复习。但是，如果学生上课时一直看手机，就会影响注意力。我的看法是，手机不是问题，关键是怎样使用。只要我们合理安排时间，手机就能成为学习的好工具。"
    },
    {
      title: "是否应该参加社团",
      keywords: ["社团", "大学", "朋友", "能力", "时间", "选择"],
      body: [
        "大学生是否应该参加社团？",
        "请说明你的观点，并举例说明。"
      ],
      sample: "我认为大学生应该参加社团。参加社团可以认识更多朋友，也可以提高交流能力。比如，语言社团能让学生练习表达，志愿者社团能让学生了解社会。当然，参加社团也需要时间，如果活动太多，可能会影响学习。因此，学生应该选择适合自己的社团，并合理安排学习和活动。"
    }
  ],
  hsk5: [
    {
      title: "网络课程的优点和不足",
      keywords: ["网络课程", "学习", "时间", "交流", "效率", "自律"],
      body: [
        "现在越来越多的人选择网络课程。",
        "请分析网络课程的优点和不足，并谈谈怎样提高网络学习效果。"
      ],
      sample: "随着互联网的发展，网络课程已经成为很多人的学习方式。它最大的优点是灵活，学习者可以根据自己的时间安排课程，也能反复观看不懂的内容。此外，网络课程资源丰富，能够满足不同学习者的需要。不过，网络学习也有不足。因为缺少面对面的交流，一些学生容易感到孤独，学习效率也可能下降。要提高网络学习效果，学习者需要制定明确计划，并主动和老师、同学交流。总的来说，网络课程是一种有价值的学习方式，但它需要较强的自律能力。"
    },
    {
      title: "传统文化与现代生活",
      keywords: ["传统文化", "现代生活", "保护", "创新", "年轻人", "价值"],
      body: [
        "有人说传统文化离现代生活越来越远。",
        "请谈谈你的看法，并说明传统文化如何进入现代生活。"
      ],
      sample: "传统文化并没有离现代生活越来越远，而是需要用新的方式被理解和传播。比如，很多年轻人通过短视频了解书法、戏曲和节日习俗，这说明传统文化仍然有吸引力。问题在于，如果只把传统文化放在博物馆里，它就很难和普通人的生活发生联系。因此，我们应该在保护传统文化的基础上进行创新，让它进入学校教育、城市设计和网络传播。只有这样，传统文化才能在现代生活中继续发挥价值。"
    }
  ],
  hsk6: [
    {
      title: "科技发展与人的独立思考",
      keywords: ["科技", "人工智能", "思考", "依赖", "判断", "发展"],
      body: [
        "科技发展给人类带来了便利，也可能让人变得依赖工具。",
        "请围绕“科技发展与人的独立思考”写一篇短文，观点明确，论证充分。"
      ],
      sample: "科技发展极大地提高了人类获取信息和解决问题的效率，但它并不必然削弱人的独立思考。真正的问题在于，人们是否把技术当成工具，还是把技术当成替自己判断的权威。以人工智能为例，它可以帮助我们整理资料、比较方案，甚至提供新的思路。然而，如果使用者不加分析地接受答案，就容易失去质疑和判断的能力。因此，科技教育不仅要教人如何使用工具，还要训练人如何提出问题、验证信息和承担选择的后果。只有保持主动思考，科技才能成为人的能力延伸，而不是人的能力替代。"
    },
    {
      title: "快节奏生活中的慢思考",
      keywords: ["快节奏", "生活", "思考", "效率", "压力", "选择"],
      body: [
        "现代社会强调效率，但人们也需要慢下来思考。",
        "请谈谈你对“快节奏生活中的慢思考”的理解。"
      ],
      sample: "现代生活的快节奏让人们习惯于迅速行动、快速回应和不断追求效率。这种方式在一定程度上提高了社会运行速度，但也让许多人缺少深入思考的时间。慢思考并不是拖延，而是在重要选择面前保留判断的空间。比如，面对职业规划、人际关系或价值选择时，如果只追求眼前效率，就可能忽略长远影响。慢下来能够帮助我们重新理解目标，区分真正重要的事情和暂时紧急的事情。因此，在快节奏生活中保留慢思考，是一种必要的自我管理能力。"
    }
  ]
};

const connectors = ["首先", "其次", "然后", "最后", "因此", "所以", "但是", "不过", "虽然", "如果", "因为", "总的来说", "与此同时", "此外", "由此可见"];
const advancedWords = ["影响", "观点", "原因", "结果", "社会", "文化", "发展", "选择", "价值", "效率", "自律", "创新", "判断", "责任", "能力", "交流", "理解", "分析", "证明", "解决"];
const localStorageKey = "hskWritingCorpus";
const adminSessionKey = "hskAdminPassword";
const localAdminPassword = "teacher2026";

const levelSelect = document.getElementById("levelSelect");
const topicSelect = document.getElementById("topicSelect");
const topicBody = document.getElementById("topicBody");
const timeHint = document.getElementById("timeHint");
const lengthHint = document.getElementById("lengthHint");
const essayInput = document.getElementById("essayInput");
const learnerId = document.getElementById("learnerId");
const learnerGroup = document.getElementById("learnerGroup");
const charCount = document.getElementById("charCount");
const sentenceCount = document.getElementById("sentenceCount");
const scoreButton = document.getElementById("scoreButton");
const sampleButton = document.getElementById("sampleButton");
const clearButton = document.getElementById("clearButton");
const connectorButton = document.getElementById("connectorButton");
const connectorPanel = document.getElementById("connectorPanel");
const saveConsent = document.getElementById("saveConsent");
const overallScore = document.getElementById("overallScore");
const scoreSummary = document.getElementById("scoreSummary");
const dimensionList = document.getElementById("dimensionList");
const annotatedText = document.getElementById("annotatedText");
const feedbackList = document.getElementById("feedbackList");
const expressionList = document.getElementById("expressionList");
const trainingList = document.getElementById("trainingList");
const rubricGrid = document.getElementById("rubricGrid");
const corpusSection = document.getElementById("corpus");
const adminStatus = document.getElementById("adminStatus");
const recordsTable = document.getElementById("recordsTable");
const totalRecords = document.getElementById("totalRecords");
const filteredRecords = document.getElementById("filteredRecords");
const averageScore = document.getElementById("averageScore");
const latestLevel = document.getElementById("latestLevel");
const highScore = document.getElementById("highScore");
const commonProblem = document.getElementById("commonProblem");
const searchInput = document.getElementById("searchInput");
const adminLevelFilter = document.getElementById("adminLevelFilter");
const adminScoreFilter = document.getElementById("adminScoreFilter");
const problemFilter = document.getElementById("problemFilter");
const recordDetail = document.getElementById("recordDetail");

let latestReport = "";
let remoteRecords = null;
let usingRemoteCorpus = false;
let adminPassword = sessionStorage.getItem(adminSessionKey) || "";

function getCurrentLevel() {
  return levels[levelSelect.value];
}

function getCurrentTopic() {
  return topics[levelSelect.value][Number(topicSelect.value) || 0];
}

function chineseChars(text) {
  return (text.match(/[\u4e00-\u9fff]/g) || []).length;
}

function splitSentences(text) {
  return text
    .replace(/\s+/g, "")
    .split(/[。！？!?；;]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function countMatches(text, list) {
  return list.reduce((sum, item) => sum + (text.includes(item) ? 1 : 0), 0);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function updateTopicOptions() {
  topicSelect.innerHTML = "";
  topics[levelSelect.value].forEach((topic, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = topic.title;
    topicSelect.appendChild(option);
  });
  renderTopic();
}

function renderTopic() {
  const level = getCurrentLevel();
  const topic = getCurrentTopic();

  timeHint.textContent = level.time;
  lengthHint.textContent = `建议字数：${level.range[0]}-${level.range[1]} 字`;
  topicBody.innerHTML = topic.body.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
}

function updateCounts() {
  const text = essayInput.value;
  charCount.textContent = `chars: ${chineseChars(text)}`;
  sentenceCount.textContent = `sentences: ${splitSentences(text).length}`;
}

function scoreEssay(text) {
  const level = getCurrentLevel();
  const topic = getCurrentTopic();
  const chars = chineseChars(text);
  const sentences = splitSentences(text);
  const connectorCount = countMatches(text, connectors);
  const topicHit = countMatches(text, topic.keywords);
  const advancedHit = countMatches(text, advancedWords);
  const punctuationCount = (text.match(/[。！？!?，,；;：:]/g) || []).length;
  const chineseRatio = text.length ? chars / text.replace(/\s/g, "").length : 0;
  const tooLongSentences = sentences.filter((sentence) => sentence.length > 45).length;
  const repeated = (text.match(/([\u4e00-\u9fff])\1{1,}/g) || []).length;
  const mixedEnglish = (text.match(/[A-Za-z]{2,}/g) || []).length;
  const paragraphs = text.split(/\n+/).filter((item) => item.trim()).length;
  const [minChars, maxChars] = level.range;

  const lengthScore = chars < minChars
    ? clamp((chars / minChars) * 12, 0, 12)
    : chars > maxChars * 1.35
      ? 12
      : 20;

  const content = clamp(
    7 + (topicHit / Math.max(2, topic.keywords.length)) * 9 + (lengthScore / 20) * 4,
    0,
    20
  );

  const structure = clamp(
    5 + Math.min(sentences.length / level.sentenceMin, 1) * 6 + Math.min(connectorCount / level.connectorTarget, 1) * 6 + Math.min(paragraphs, 3) * 1.2,
    0,
    20
  );

  const vocabulary = clamp(
    6 + Math.min(advancedHit / (level.connectorTarget + 2), 1) * 7 + Math.min(chars / maxChars, 1) * 5 + Math.min(topicHit / topic.keywords.length, 1) * 2,
    0,
    20
  );

  const grammarPenalty = tooLongSentences * 1.8 + repeated * 1.4 + mixedEnglish * 2;
  const grammar = clamp(18 - grammarPenalty + Math.min(connectorCount, 4) * 0.5, 0, 20);

  const punctuation = clamp(
    7 + Math.min(punctuationCount / Math.max(sentences.length, 1), 1.5) * 5 + chineseRatio * 7 - mixedEnglish * 1.2,
    0,
    20
  );

  const dimensions = [
    {
      name: "内容切题",
      score: content,
      note: topicHit ? `命中 ${topicHit} 个题目关键词。` : "题目关键词较少，建议更直接回应题目。"
    },
    {
      name: "结构连贯",
      score: structure,
      note: `检测到 ${sentences.length} 个句子、${connectorCount} 个连接表达。`
    },
    {
      name: "词汇等级",
      score: vocabulary,
      note: `检测到 ${advancedHit} 个较高阶表达或主题词。`
    },
    {
      name: "语法表达",
      score: grammar,
      note: tooLongSentences ? `${tooLongSentences} 个句子偏长，建议拆分。` : "句长控制较稳定。"
    },
    {
      name: "汉字标点",
      score: punctuation,
      note: punctuationCount ? "已使用中文标点，注意逗号和句号搭配。" : "标点较少，建议补充句号、逗号。"
    }
  ];

  let total = dimensions.reduce((sum, item) => sum + item.score, 0);

  if (chars < minChars) {
    total *= clamp(0.55 + (chars / minChars) * 0.45, 0.55, 1);
  } else if (chars > maxChars * 1.45) {
    total *= 0.9;
  }

  total = Math.round(total);
  const stats = {
    level,
    topic,
    chars,
    sentences,
    connectorCount,
    topicHit,
    advancedHit,
    punctuationCount,
    tooLongSentences,
    mixedEnglish,
    repeated,
    total
  };
  const feedback = makeFeedback(stats);
  const problemTags = makeProblemTags(stats);

  return {
    total,
    dimensions,
    feedback,
    problemTags,
    chars,
    sentenceTotal: sentences.length
  };
}

function makeProblemTags(stats) {
  const [minChars, maxChars] = stats.level.range;
  const tags = [];

  if (stats.chars < minChars) tags.push("字数不足");
  if (stats.chars > maxChars * 1.25) tags.push("篇幅偏长");
  if (stats.topicHit < 2) tags.push("切题不足");
  if (stats.connectorCount < stats.level.connectorTarget) tags.push("连接词不足");
  if (stats.tooLongSentences > 0) tags.push("句子过长");
  if (stats.mixedEnglish > 0) tags.push("英文混入");
  if (stats.repeated > 0) tags.push("重复输入");
  if (stats.punctuationCount === 0) tags.push("标点不足");

  return tags.length ? tags : ["表现稳定"];
}

function makeFeedback(stats) {
  const feedback = [];
  const expressions = [];
  const training = [];
  const [minChars, maxChars] = stats.level.range;

  if (stats.chars < minChars) {
    feedback.push(`字数不足。当前 ${stats.chars} 字，${stats.level.label} 建议写到 ${minChars}-${maxChars} 字。`);
    training.push("先补充一个具体例子，再补充一句总结。");
  } else if (stats.chars > maxChars * 1.25) {
    feedback.push("篇幅偏长，可以删去重复解释，让重点更集中。");
    training.push("练习用 3 个段落完成：观点、理由、总结。");
  } else {
    feedback.push("字数基本符合当前等级训练要求。");
  }

  if (stats.topicHit < 2) {
    feedback.push("文章和题目关键词联系不够明显，建议在开头直接点明主题。");
  } else {
    feedback.push("内容与题目有联系，可以继续加强理由和例子。");
  }

  if (stats.connectorCount < stats.level.connectorTarget) {
    feedback.push("连接表达较少，段落之间的逻辑关系还可以更清楚。");
    expressions.push("首先……其次……最后……");
    expressions.push("因为……所以……");
    expressions.push("虽然……但是……");
  } else {
    feedback.push("已使用连接表达，文章逻辑比较容易理解。");
  }

  if (stats.tooLongSentences > 0) {
    feedback.push("部分句子过长，容易出现语法问题。建议把长句拆成两个短句。");
    training.push("找出最长的一个句子，用句号拆成两句。");
  }

  if (stats.mixedEnglish > 0) {
    feedback.push("作文中出现英文词。HSK 写作练习应尽量使用中文表达。");
  }

  if (stats.repeated > 0) {
    feedback.push("检测到连续重复汉字，可能是输入或表达错误。");
  }

  if (stats.punctuationCount === 0) {
    feedback.push("缺少标点，建议使用逗号、句号、问号等中文标点。");
  }

  if (!expressions.length) {
    expressions.push("我认为……原因是……");
    expressions.push("举一个例子来说……");
    expressions.push("总的来说，这件事有好处，也有需要注意的地方。");
  }

  training.push(`用 ${stats.level.label} 重新修改一次，重点检查：切题、连接词、标点。`);
  training.push("修改后再次评分，比较两次分数和诊断建议。");

  return { feedback, expressions, training };
}

function renderScore(result) {
  overallScore.textContent = result.total;

  const band = result.total >= 86
    ? "优秀"
    : result.total >= 72
      ? "达标"
      : result.total >= 60
        ? "接近达标"
        : "需要修改";

  scoreSummary.textContent = `${band}。当前作文 ${result.chars} 字，共 ${result.sentenceTotal} 个句子。建议根据下方批改报告修改后再次提交。`;

  dimensionList.innerHTML = result.dimensions.map((item) => {
    const score = Math.round(item.score);
    return `
      <div class="dimension-item">
        <div class="dimension-top">
          <span>${item.name}</span>
          <strong>${score}/20</strong>
        </div>
        <div class="bar" aria-hidden="true"><span style="width:${score * 5}%"></span></div>
        <div class="dimension-note">${item.note}</div>
      </div>
    `;
  }).join("");
}

function annotateText(text) {
  if (!text.trim()) {
    return '<span class="empty-state">暂无文本。</span>';
  }

  const sentences = text.split(/([。！？!?；;\n])/);
  let html = "";

  for (let index = 0; index < sentences.length; index += 2) {
    const sentence = sentences[index] || "";
    const punctuation = sentences[index + 1] || "";
    const cleanSentence = sentence.trim();

    if (!cleanSentence && punctuation === "\n") {
      html += "\n";
      continue;
    }

    let className = "";
    let note = "";

    if (/[A-Za-z]{2,}/.test(cleanSentence)) {
      className = "mark-error";
      note = "建议改为中文表达";
    } else if (cleanSentence.length > 45) {
      className = "mark-warning";
      note = "句子偏长，可拆分";
    } else if (connectors.some((item) => cleanSentence.includes(item))) {
      className = "mark-good";
      note = "连接表达较好";
    }

    if (className) {
      html += `<span class="${className}" title="${note}">${escapeHtml(sentence)}${escapeHtml(punctuation)}</span><span class="comment-dot" title="${note}">i</span>`;
    } else {
      html += `${escapeHtml(sentence)}${escapeHtml(punctuation)}`;
    }
  }

  return html;
}

function renderFeedback(result, text) {
  annotatedText.innerHTML = annotateText(text);
  feedbackList.innerHTML = result.feedback.feedback.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  expressionList.innerHTML = result.feedback.expressions.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  trainingList.innerHTML = result.feedback.training.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  latestReport = [
    `HSK等级：${getCurrentLevel().label}`,
    `题目：${getCurrentTopic().title}`,
    `综合评分：${result.total}/100`,
    `字数：${result.chars}`,
    `问题标签：${result.problemTags.join("、")}`,
    "",
    "诊断建议：",
    ...result.feedback.feedback.map((item) => `- ${item}`),
    "",
    "推荐表达：",
    ...result.feedback.expressions.map((item) => `- ${item}`),
    "",
    "下一步训练：",
    ...result.feedback.training.map((item) => `- ${item}`)
  ].join("\n");
}

function getRecords() {
  try {
    const records = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    return Array.isArray(records) ? records.map(normalizeRecord) : [];
  } catch (error) {
    return [];
  }
}

function setRecords(records) {
  localStorage.setItem(localStorageKey, JSON.stringify(records.map(normalizeRecord)));
}

function getCorpusRecords() {
  return usingRemoteCorpus && Array.isArray(remoteRecords)
    ? remoteRecords.map(normalizeRecord)
    : getRecords();
}

function normalizeRecord(record) {
  return {
    id: record.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
    createdAt: record.createdAt || new Date().toISOString(),
    learnerId: record.learnerId || "匿名",
    learnerGroup: record.learnerGroup || "未分组",
    level: record.level || "HSK 3",
    topic: record.topic || "未命名题目",
    chars: Number(record.chars || 0),
    sentences: Number(record.sentences || 0),
    score: Number(record.score || 0),
    dimensions: Array.isArray(record.dimensions) ? record.dimensions : [],
    problemTags: Array.isArray(record.problemTags) && record.problemTags.length ? record.problemTags : ["旧记录"],
    text: record.text || "",
    report: record.report || ""
  };
}

function buildSubmissionRecord(result, text) {
  return normalizeRecord({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    learnerId: learnerId.value.trim() || "匿名",
    learnerGroup: learnerGroup.value.trim() || "未分组",
    level: getCurrentLevel().label,
    topic: getCurrentTopic().title,
    chars: result.chars,
    sentences: result.sentenceTotal,
    score: result.total,
    dimensions: result.dimensions.map((item) => ({
      name: item.name,
      score: Math.round(item.score),
      note: item.note
    })),
    problemTags: result.problemTags,
    text,
    report: latestReport
  });
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return response.json();
}

async function submitRemoteRecord(record) {
  if (location.protocol === "file:") {
    return { ok: false, configured: false, message: "Local file mode" };
  }

  try {
    return await postJson("/api/submit", {
      ...record,
      userAgent: navigator.userAgent
    });
  } catch (error) {
    return { ok: false, configured: false, message: error.message };
  }
}

function saveLocalRecord(record) {
  const records = getRecords();
  records.unshift(record);
  setRecords(records.slice(0, 300));
  renderCorpus();
}

function saveRecord(result, text) {
  if (!saveConsent.checked) {
    return;
  }

  const record = buildSubmissionRecord(result, text);
  saveLocalRecord(record);
  submitRemoteRecord(record).then((response) => {
    if (response.ok) {
      console.info("Remote corpus saved.");
    } else {
      console.info("Remote corpus fallback:", response.message || "not configured");
    }
  });
}

function getFilteredRecords(records = getCorpusRecords()) {
  const keyword = searchInput.value.trim().toLowerCase();
  const level = adminLevelFilter.value;
  const scoreBand = adminScoreFilter.value;
  const problem = problemFilter.value;

  return records.filter((record) => {
    const searchText = [
      record.learnerId,
      record.learnerGroup,
      record.level,
      record.topic,
      record.text,
      record.report,
      record.problemTags.join(" ")
    ].join(" ").toLowerCase();

    const matchKeyword = !keyword || searchText.includes(keyword);
    const matchLevel = level === "all" || record.level === level;
    const matchProblem = problem === "all" || record.problemTags.includes(problem);
    const matchScore = scoreBand === "all"
      || (scoreBand === "excellent" && record.score >= 86)
      || (scoreBand === "pass" && record.score >= 72 && record.score <= 85)
      || (scoreBand === "near" && record.score >= 60 && record.score <= 71)
      || (scoreBand === "weak" && record.score < 60);

    return matchKeyword && matchLevel && matchProblem && matchScore;
  });
}

function renderProblemOptions(records) {
  const selected = problemFilter.value;
  const tags = [...new Set(records.flatMap((record) => record.problemTags))].sort();
  problemFilter.innerHTML = '<option value="all">全部标签</option>';
  tags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    problemFilter.appendChild(option);
  });
  problemFilter.value = tags.includes(selected) ? selected : "all";
}

function getCommonProblem(records) {
  const counts = new Map();
  records.forEach((record) => {
    record.problemTags.forEach((tag) => {
      if (tag !== "表现稳定") {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      }
    });
  });

  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  return sorted[0] ? sorted[0][0] : "暂无";
}

function renderCorpus() {
  const records = getCorpusRecords();
  renderProblemOptions(records);
  const filtered = getFilteredRecords(records);
  totalRecords.textContent = String(records.length);
  filteredRecords.textContent = String(filtered.length);
  averageScore.textContent = filtered.length
    ? String(Math.round(filtered.reduce((sum, item) => sum + item.score, 0) / filtered.length))
    : "--";
  highScore.textContent = filtered.length ? String(Math.max(...filtered.map((item) => item.score))) : "--";
  latestLevel.textContent = records[0]?.level || "--";
  commonProblem.textContent = getCommonProblem(filtered);

  if (!filtered.length) {
    recordsTable.innerHTML = '<tr><td colspan="8">暂无符合条件的语料记录。</td></tr>';
    return;
  }

  recordsTable.innerHTML = filtered.map((record) => {
    const date = new Date(record.createdAt).toLocaleString("zh-CN", { hour12: false });
    return `
      <tr>
        <td>${date}</td>
        <td>${escapeHtml(record.learnerId)}<br><span class="empty-state">${escapeHtml(record.learnerGroup)}</span></td>
        <td>${record.level}</td>
        <td>${escapeHtml(record.topic)}</td>
        <td>${record.chars}</td>
        <td>${record.score}</td>
        <td><div class="tag-list">${record.problemTags.map((tag) => `<span class="problem-tag">${escapeHtml(tag)}</span>`).join("")}</div></td>
        <td>
          <button class="table-action" type="button" data-detail="${record.id}">详情</button>
          <button class="table-action" type="button" data-load="${record.id}">回填</button>
          <button class="table-action" type="button" data-delete="${record.id}">删除</button>
        </td>
      </tr>
    `;
  }).join("");

  recordsTable.querySelectorAll("[data-load]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = getCorpusRecords().find((item) => item.id === button.dataset.load);
      if (!record) return;
      essayInput.value = record.text;
      learnerId.value = record.learnerId === "匿名" ? "" : record.learnerId;
      learnerGroup.value = record.learnerGroup === "未分组" ? "" : record.learnerGroup;
      updateCounts();
      document.getElementById("workspace").scrollIntoView({ behavior: "smooth" });
    });
  });

  recordsTable.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = getCorpusRecords().find((item) => item.id === button.dataset.detail);
      if (record) showRecordDetail(record);
    });
  });

  recordsTable.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (!confirm("确定删除这条语料记录吗？")) return;

      if (usingRemoteCorpus) {
        const response = await deleteRemoteRecord(button.dataset.delete);
        if (!response.ok) {
          alert(response.configured === false ? "远程后台未配置，无法删除远程记录。" : "远程删除失败，请稍后再试。");
          return;
        }
        await loadRemoteRecords(adminPassword);
      } else {
        setRecords(getRecords().filter((item) => item.id !== button.dataset.delete));
        renderCorpus();
      }
    });
  });
}

function showRecordDetail(record) {
  recordDetail.innerHTML = `
    <h3>语料详情</h3>
    <div class="detail-meta">
      <span><strong>学习者：</strong>${escapeHtml(record.learnerId)} / ${escapeHtml(record.learnerGroup)}</span>
      <span><strong>任务：</strong>${record.level} · ${escapeHtml(record.topic)}</span>
      <span><strong>数据：</strong>${record.chars} 字，${record.sentences} 句，综合分 ${record.score}/100</span>
      <span><strong>标签：</strong><span class="tag-list">${record.problemTags.map((tag) => `<span class="problem-tag">${escapeHtml(tag)}</span>`).join("")}</span></span>
    </div>
    <div class="record-detail-grid">
      <div>
        <h4>作文原文</h4>
        <div class="detail-text">${escapeHtml(record.text)}</div>
      </div>
      <div>
        <h4>维度分</h4>
        <div class="dimension-mini">
          ${record.dimensions.map((item) => `<div><span>${escapeHtml(item.name)}</span><strong>${item.score}/20</strong></div>`).join("") || "<p class=\"empty-state\">旧记录暂无维度分。</p>"}
        </div>
      </div>
      <div>
        <h4>批改报告</h4>
        <div class="detail-report">${escapeHtml(record.report || "暂无报告。")}</div>
      </div>
    </div>
  `;
}

function exportCsv() {
  const records = getFilteredRecords();
  if (!records.length) {
    alert("暂无符合条件的语料可导出。");
    return;
  }

  const headers = ["createdAt", "learnerId", "learnerGroup", "level", "topic", "chars", "sentences", "score", "problemTags", "dimensions", "text", "report"];
  const rows = records.map((record) => headers.map((key) => {
    const value = String(Array.isArray(record[key]) ? JSON.stringify(record[key]) : record[key] ?? "").replace(/"/g, '""');
    return `"${value}"`;
  }).join(","));

  const csv = `\uFEFF${headers.join(",")}\n${rows.join("\n")}`;
  downloadBlob(csv, "text/csv;charset=utf-8", `hsk-writing-corpus-${new Date().toISOString().slice(0, 10)}.csv`);
}

function exportJson() {
  const records = getFilteredRecords();
  if (!records.length) {
    alert("暂无符合条件的语料可导出。");
    return;
  }

  const payload = {
    exportedAt: new Date().toISOString(),
    source: "HSK Writing Studio local corpus",
    records
  };
  downloadBlob(JSON.stringify(payload, null, 2), "application/json;charset=utf-8", `hsk-writing-corpus-${new Date().toISOString().slice(0, 10)}.json`);
}

function downloadBlob(content, type, filename) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function importJsonFile(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const data = JSON.parse(String(reader.result || "{}"));
      const importedRecords = Array.isArray(data) ? data : data.records;

      if (!Array.isArray(importedRecords)) {
        alert("JSON 格式不正确，未找到 records 数组。");
        return;
      }

      const merged = [
        ...importedRecords.map(normalizeRecord),
        ...getRecords()
      ];
      const unique = [];
      const ids = new Set();

      merged.forEach((record) => {
        if (ids.has(record.id)) return;
        ids.add(record.id);
        unique.push(record);
      });

      setRecords(unique.slice(0, 300));
      renderCorpus();
      alert(`已导入 ${importedRecords.length} 条语料记录。`);
    } catch (error) {
      alert("JSON 解析失败，请检查文件格式。");
    }
  });
  reader.readAsText(file, "utf-8");
}

function setAdminStatus(message) {
  adminStatus.textContent = message;
}

async function loadRemoteRecords(password) {
  if (location.protocol === "file:") {
    return { ok: false, configured: false, message: "Local file mode" };
  }

  try {
    const response = await postJson("/api/admin", { password });

    if (response.ok) {
      remoteRecords = response.records || [];
      usingRemoteCorpus = true;
      setAdminStatus(`已连接远程 Supabase 语料库，共 ${remoteRecords.length} 条记录。`);
      renderCorpus();
      return response;
    }

    return response;
  } catch (error) {
    return { ok: false, configured: false, message: error.message };
  }
}

async function deleteRemoteRecord(id) {
  try {
    return await postJson("/api/delete", { password: adminPassword, id });
  } catch (error) {
    return { ok: false, configured: true, message: error.message };
  }
}

function unlockLocalCorpus(password) {
  if (password !== localAdminPassword) {
    return false;
  }

  remoteRecords = null;
  usingRemoteCorpus = false;
  setAdminStatus("当前为本地演示语料库。部署 Vercel 并配置 Supabase 后，将自动读取远程数据库。");
  renderCorpus();
  return true;
}

function renderRubric() {
  rubricGrid.innerHTML = Object.values(levels).map((level) => `
    <article class="rubric-card">
      <h3>${level.label}</h3>
      <p>${level.description}</p>
      <p><strong>字数：</strong>${level.range[0]}-${level.range[1]} 字</p>
      <p><strong>标准：</strong>${level.rubric}</p>
    </article>
  `).join("");
}

function insertAtCursor(textarea, insertText) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = `${textarea.value.slice(0, start)}${insertText}${textarea.value.slice(end)}`;
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + insertText.length;
  updateCounts();
}

function runScoring() {
  const text = essayInput.value.trim();
  if (!text) {
    alert("请先输入作文内容。");
    return;
  }

  const result = scoreEssay(text);
  renderScore(result);
  renderFeedback(result, text);
  saveRecord(result, text);
  document.getElementById("report").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function showCorpusAdmin() {
  if (!adminPassword) {
    adminPassword = prompt("请输入教师后台密码。\n\nVercel 部署后使用环境变量 ADMIN_PASSWORD。\n本地演示密码：teacher2026") || "";
  }

  if (!adminPassword) {
    return;
  }

  corpusSection.classList.remove("admin-hidden");
  setAdminStatus("正在验证后台密码并读取语料库...");
  corpusSection.scrollIntoView({ behavior: "smooth", block: "start" });

  const remoteResponse = await loadRemoteRecords(adminPassword);

  if (remoteResponse.ok) {
    sessionStorage.setItem(adminSessionKey, adminPassword);
    return;
  }

  if (remoteResponse.configured && remoteResponse.message === "Invalid admin password") {
    sessionStorage.removeItem(adminSessionKey);
    adminPassword = "";
    corpusSection.classList.add("admin-hidden");
    alert("教师后台密码错误。");
    return;
  }

  if (!unlockLocalCorpus(adminPassword)) {
    sessionStorage.removeItem(adminSessionKey);
    adminPassword = "";
    corpusSection.classList.add("admin-hidden");
    alert("远程后台未配置或无法连接。本地演示请使用密码 teacher2026。");
  }
}

function hideCorpusAdmin() {
  corpusSection.classList.add("admin-hidden");
  remoteRecords = null;
  usingRemoteCorpus = false;
  document.getElementById("workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  if (location.hash === "#corpus") {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
}

levelSelect.addEventListener("change", updateTopicOptions);
topicSelect.addEventListener("change", renderTopic);
essayInput.addEventListener("input", updateCounts);
scoreButton.addEventListener("click", runScoring);

sampleButton.addEventListener("click", () => {
  essayInput.value = getCurrentTopic().sample;
  updateCounts();
});

clearButton.addEventListener("click", () => {
  essayInput.value = "";
  updateCounts();
});

connectorButton.addEventListener("click", () => {
  connectorPanel.classList.toggle("hidden");
});

connectorPanel.querySelectorAll("[data-insert]").forEach((button) => {
  button.addEventListener("click", () => insertAtCursor(essayInput, button.dataset.insert));
});

document.getElementById("copyReportButton").addEventListener("click", async () => {
  if (!latestReport) {
    alert("暂无报告可复制。");
    return;
  }

  try {
    await navigator.clipboard.writeText(latestReport);
    alert("批改报告已复制。");
  } catch (error) {
    const temp = document.createElement("textarea");
    temp.value = latestReport;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    alert("批改报告已复制。");
  }
});

document.getElementById("exportButton").addEventListener("click", exportCsv);
document.getElementById("exportJsonButton").addEventListener("click", exportJson);
document.getElementById("backToStudioButton").addEventListener("click", hideCorpusAdmin);

document.querySelectorAll('a[href="#corpus"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showCorpusAdmin();
  });
});

[searchInput, adminLevelFilter, adminScoreFilter, problemFilter].forEach((control) => {
  control.addEventListener(control === searchInput ? "input" : "change", renderCorpus);
});

document.getElementById("importJsonInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    importJsonFile(file);
  }
  event.target.value = "";
});

document.getElementById("clearCorpusButton").addEventListener("click", () => {
  if (!confirm("确定清空本地语料记录吗？")) {
    return;
  }
  setRecords([]);
  renderCorpus();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("hskTheme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("hskTheme") === "dark") {
  document.body.classList.add("dark");
}

updateTopicOptions();
updateCounts();
renderRubric();
renderCorpus();

if (location.hash === "#corpus") {
  showCorpusAdmin();
}
