export const CurrentStudent:Student[]=[
    {name:"黃宣慈", photoPath:"/member/zoom/personal/cihh.jpg", describe:"這是宣慈，目前正就讀於國立中山大學資訊工程研究所。宣慈喜歡唱歌、跳舞和彈吉他，並且是個追星族，曾經在四天內看了日本和台灣共三場演唱會，完全是時間管理大師。未來也要努力賺錢，不然總有一天會散盡家財。"},
    {name:"麥明輝", photoPath:"/member/zoom/personal/minghui.jpg", describe:"他是畢業於宜蘭大學電機系的INTJ，有空會到處玩到處吃，正在挑戰吃遍台北和高雄的拉麵地圖！也愛看劇、Kpop來放鬆戶外活動喜歡打球、騎腳踏車。在家偶爾會下廚，最拿手的是日式丼飯。他外表有點安靜的，不太像熱情型，但內心其實很想成為溫暖的人，正在努力中！"},
    {name:"黃怡甄", photoPath:"/member/zoom/personal/ichen.jpg", describe:"喜歡穿洋裝，喜歡保養，喜歡出去玩，但是不想曬太陽😐"},
    {name:"林微訢", photoPath:"member/zoom/personal/weihsin.jpg", describe:"微訢的能量沒有很高，有時候會看到他蹲著，但可以找他聊天，他會蠻開心的，也可以找他一起打桌球！"},
    {name:"余穎嵐", photoPath:"member/zoom/personal/yinglan.jpg", describe:"穎嵐體內同時住著吉伊和烏薩奇，平常預設運行吉伊模式，但偶爾會毫無預警切換成烏薩奇模式，目前切換機制仍是未知 bug。"},
    // {name:"宋冠穎", photoPath:"member/zoom/", describe:""},
    // {name:"王柏翔", photoPath:"member/zoom/", describe:""},
    // {name:"林佳誼", photoPath:"member/zoom/", describe:""},
  ]

export interface Student{
    name:string,
    photoPath:string,
    describe:string,
}

export interface Alumni{
    thesisTitle: string,
    projectorImgPath: string,
    thesisAbtrast: string
}

export type AlumniData = Student & Alumni;

export const Student:(Student&Alumni)[]=[
  {
    name: "黃建榮",
    photoPath: "/member/zoom/personal/rong.jpg",
    describe: "嗨伙計們！我是建榮，你們的「老大哥」，曾在這裡歡樂度過時光。現在我是和碩集團的韌體工程師！當年2022年畢業，走進社會成為新鮮人，開始當社畜，但還好我還有運動可以幫我舒壓QAQ。當初研究生的路，辛酸滋味我懂！夜以繼日的奮鬥、資料探索的掙扎，還有無窮無盡的論文海，這些經驗都讓我珍惜以前的日子。在這個實驗室，我希望看到你們這些年輕的『傑出』學弟妹們，打造出令人瞠目結舌的研究！",
    thesisTitle: "流體速度對於背景抑制磁振影像之影響：電腦模擬與仿體研究",
    projectorImgPath: "/member/zoom/thesis/rong.jpg",
    thesisAbtrast: "本研究引入背景抑制技術，在使用此技術基礎下，研究探討血液流速對影像的影響。使用了具有不同氯化鎳濃度的靜態組織模擬物和模擬穩定血流的流體模擬物。結果顯示不同抑制設置之間的背景抑制效果相似。此外，流體模擬實驗表明在不同的參數設置中，信號強度會隨著流速降低而有明顯對應的訊號變化。透過本研究流體仿體實驗，驗證了流體流速對背景抑制效果的影響。期望未來能致力於改進信號模型，以實現更準確的實驗模擬結果。",
  },
  {
    name: "邵莉雅",
    photoPath: "member/zoom/personal/liya.jpg",
    describe: "邵莉雅，於2021年畢業於中原大學物理系，並且在2023年取得國立中山大學電機工程所碩士。個性溫和，喜歡欣賞各種影集。",
    thesisTitle: "使用徑向三迴波穩態掃描進行三維全腦弛緩時間研究",
    projectorImgPath: "member/zoom/thesis/liya.png",
    thesisAbtrast: "● 使用黃金徑像取樣TESS掃描序列，定量MR弛緩時間參數：T1和T2。\n● 製作仿體進行實驗，針對方法進行驗證。\n● 受試者實驗，能以時間7分半鐘內完成全腦掃描，經計算獲得三維的T1和T2 map影像。",
  },
  {
    name: "楊翎",
    photoPath: "member/zoom/personal/R0.jpg",
    describe: "楊翎於2021年畢業於私立銘傳大學。她於2023年獲得國立中山大學資訊工程學系碩士學位。她熱衷於策略型遊戲和解謎，這反映了她的策略性思考和對細節的專注。",
    thesisTitle: "利用磁化準備平衡穩定態序列定量血液T2：測量方法與變因",
    projectorImgPath: "member/zoom/thesis/R0.jpg",
    thesisAbtrast: "磁振造影（MRI）在現代醫學中扮演關鍵角色，尤其是T2的估計與血氧濃度的評估。本研究透過T2磁化準備技術於MRI中生成具有不同T2對比度的影像，以提升T2估算的精確度。採用特殊MRI掃描序列如背景抑制和bSSFP，並進行參數調整，結果顯示這些技術可以有效提高T2測量的精確性。",
  },
  // {
  //   name: "潘文浩",
  //   photoPath: "member/zoom/personal/hank.jpg",
  //   describe: "潘文浩於2021年畢業於國立屏東大學資訊工程學系,目前正就讀於國立中山大學資訊工程研究所。他平時的喜好諸如:閱讀小說、看影集……等等。",
  //   thesisTitle: "NULL",
  //   projectorImgPath: "",
  //   thesisAbtrast: "",
  // },
  
  {
    name: "王姿淇",
    photoPath: "member/zoom/personal/chi.jpg",
    describe: "王姿淇，在2016年畢業於暨南大學資訊工程系，並在2023年完成中山大學資工所學位。喜歡看小說與動漫，偏好玄幻與運動類型的作品。",
    thesisTitle: "基於機率密度函數方式加速黃金角度徑向取樣法",
    projectorImgPath: "member/zoom/thesis/chi.png",
    thesisAbtrast: "畢業論文題目是對黃金角度徑向取樣法進行加速。使用全取樣的資料進行模擬，利用三種不同的機率密度函數進行稀疏取樣來實現加速的目的。並比較三種方法的成像差異，從中選出較好的結果，再與常見的加速方法比較。",
  },
  {
    name: "梁昱威",
    photoPath: "member/zoom/personal/yuwei.png",
    describe: "梁昱威於2024年取得國立中山大學資訊工程學系碩士學位。家裡養了兩隻可愛的狗，平常的興趣是跟狗玩。",
    thesisTitle: "使用點擴散函數與GMSD評估CIRCUS欠採樣策略與重建影像品質",
    projectorImgPath: "member/zoom/thesis/yuwei.gif",
    thesisAbtrast: "本研究聚焦於CIRCUS採樣策略，結合壓縮感知技術進行影像重建，系統性地分析了CIRCUS在不同隨機化調節係數下對MRI影像品質的影響，並且初步發現了PSF的能量分佈形態與影像重建品質之間存在高度的相關性。",
  },
  
  {
    name: "黃柏琮",
    photoPath: "member/zoom/personal/bo.jpg",
    describe: "這是柏琮，在2022年畢業於國立臺中教育大學資訊工程學系，並於同一年加入國立中山大學資訊工程學系智慧生醫信號分析實驗室。柏琮喜歡的休閒娛樂是打籃球和底片攝影，但柏琮表示底片攝影的興趣可能快要維持不下去了，因為底片很貴。他說底片貴到快按不下快門。",
    thesisTitle: "加速傅立葉流速編碼:以壓縮感知重建欠採樣流速頻率信號暨最高流速定量",
    projectorImgPath: "member/zoom/thesis/bo.jpg",
    thesisAbtrast: "傅立葉流速編碼可以對血流流速進行解析，避免部分體積效應的問題。但傅立葉流速編碼需要收取多個不同流速編碼設定下的信號，導致其掃描時間較長。本研究在流速頻率維度的信號上進行欠採樣，並使用壓縮感知的技術重建流速解析，加速傅立葉流速編碼掃描，減少掃描時間。",
  },
  {
    name: "林彥儒",
    photoPath: "member/zoom/personal/aaron.jpg",
    describe: "林彥儒先生於2023年畢業於中原大學電子工程系，並於2023年就讀國立中山大學電機工程系碩士學位。他喜歡唱歌、旅行、烹飪和各種球類運動，例如籃球、撞球和保齡球。他的個性活潑外向，非常喜歡與人相處。他最喜歡的食物是拉麵， 他曾經在一個晚上（大約4個小時）吃了3碗拉麵！",
    thesisTitle: "超音波運動感測器用於心臟活動偵測之可行性研究",
    projectorImgPath: "member/zoom/thesis/aaron.png",
    thesisAbtrast: "本研究使用基於超音波原理運作的運動偵測裝置系統作為Cardiac gating的工具，在不受磁場的影響下非侵入式地偵測心跳變化，並針對使用該系統偵測心跳相關活動進行可行性研究。本研究設計了兩項實驗，分別為手臂脈搏偵測實驗利及心跳偵測實驗。針對此兩項實驗中獲得之灰階強度圖，本研究經由訊號前處理與後處理之後進行「主成分分析」以及「時域相位趨勢分析」，並在心跳偵測實驗中收取了心電圖訊號作為參考訊號，用於驗證及評估使用該系統偵測心跳相關活動的可行性。本研究結果顯示，目前透過視覺化觀察可定性地驗證該系統在偵測心跳活動上具有潛力及初步應用可行性。期望未來能在本研究之基礎上，進一步探討其訊號之定量分析方式，以提升臨床應用之價值。",
  },
    {
    name: "謝旻霏",
    photoPath: "member/zoom/personal/mf.jpg",
    describe: "旻霏畢業於國立臺東大學資訊工程學系，並於2025年取得國立中山大學資工所碩士學位。我喜歡烘焙(有時候…)，旅遊和去海邊。去海邊是一件很放鬆的事~",
    thesisTitle: "透過徑向取樣定量磁場飄移及相位校正",
    projectorImgPath: "member/zoom/thesis/mf.png",
    thesisAbtrast: "研究方向為磁振造影中的磁場飄移(field drift)校正與定量磁振技術。透過黃金角徑向取樣追蹤 k-space 中心點的相位變化，建立磁場飄移模型並進行相位校正，以降低磁場飄移對 TESS 影像與 T1/T2 定量結果的影響。",
  },
    {
    name: "范依玟",
    photoPath: "/member/zoom/personal/yiwen.jpg",
    describe: "這是依玟，大學畢業於國立暨南大學，於2026於中山大學資工所取得碩士學位。依玟喜歡打排球，但是研究所沒有機會打排球，所以跑去健身。平常休閒愛好是看LOL的比賽，希望將來出去工作可以賺大錢，出國去現場看比賽。",
    thesisTitle: "利用三維手部骨骼模型量測手指關節角度",
    projectorImgPath: "member/zoom/thesis/yiwen.png",
    thesisAbtrast: "在臨床診斷上，骨科醫師需透過量測患者的手指頭關節角度評估患者手指關節活動度。本研究旨在提供臨床應用上能夠更快速且便利的工具，利用機器學習自動化對影像作手部特徵點標註，並搭配電腦視覺技術，重建人體手部關節點三維座標，進而計算出患者手指關節點角度。",
  },
  {
    name: "黃瑄貽",
    photoPath: "member/zoom/personal/hsuani.jpg",
    describe: "這是瑄貽，目前就讀中山電機工程所，她喜歡吃很辣的東西！很喜歡旅行出國玩所以會努力賺錢錢，她希望很近的未來是一位有錢人！",
    thesisTitle: "用於產生連續速度分佈之MR相容旋轉裝置的開發與效能評估",
    projectorImgPath: "member/zoom/thesis/hsuani.jpg",
    thesisAbtrast: "本研究旨在建立可於磁振造影環境中運作之旋轉式流速仿體系統，整合氣動驅動、流量控制、光學計數器及PI回授控制，以提供可控且穩定的旋轉速度與連續速度分佈。未來將加入仿體負載，進一步應用於磁振造影序列之流速影響評估。",
  },
    {
    name: "陳姵汶",
    photoPath: "member/zoom/personal/pw.jpg",
    describe: "姵汶於2026年畢業於公山中山大學資訊工程學系碩士班。她很愛講話，有時候連自己都會懷疑:「我是不是有點太吵了?」。她也很愛講諧音梗，但實驗室的大家普遍都不捧場。QQ",
    thesisTitle: "雙回波穩態掃描之影像合成對比之應用：訊號抑制與T2弛緩時間定量 ",
    projectorImgPath: "member/zoom/thesis/pw.png",
    thesisAbtrast: "雙回波穩態在一次的掃描後，即可產生兩種不同對比特性的訊號。本研究基於此特性進行影像合成對比，透過模擬產生合成權重，以產生具特定組織訊號抑制效果的對比影像；並根據訊號模型進行T2定量，產生T2 map。",
  },
];
