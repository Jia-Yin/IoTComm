(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{409:function(t,e,r){"use strict";r.r(e);var s=r(20),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"傅立葉變換-04"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#傅立葉變換-04"}},[t._v("#")]),t._v(" 傅立葉變換-04")]),t._v(" "),r("p",[t._v("在上一個小單元中，我們可以把四個不同頻率的成份波想成四個跑者，速度分別是 0 1 2 3，那麼同時出發，經過 1 個時間單位之後，分別跑了 0 1 2 3 圈，於是又重合在一起了，這時的取樣值為 4。至於另三個取樣時間點 (1/4, 2/4, 3/4 單位時間），因為都會產生對稱的情況，所以總和都會是 0，於是就不斷得到 4 0 0 0 的重覆取樣結果。")]),t._v(" "),r("p",[t._v("那如果要得到 0 4 0 0 的結果，也就是說，在 1/4 單位時間時，四個跑者才會重合。那麼我們不妨把時間倒回去，看看時間為 0 的時候，它們應該在哪裡？這個應該不難，直流成份波還是在原地；速度 1 的應該後退 1/4 圈（-90度）；速度 2 的應該後退 2/4 圈（-180度）；速度 3 的應該後退 3/4 圈（-270度）。")]),t._v(" "),r("p",[t._v("那麼現在把 Cycles 的部份改成 "),r("code",[t._v("1 1:-90 1:-180 1:-270")]),t._v(" 試看看。")]),t._v(" "),r("p",{attrs:{align:"center"}},[r("Fourier-Circular",{attrs:{freqs:"1 1 1 1",distime:"true"}})],1),t._v(" "),r("br"),t._v(" "),r("exercise"),t._v(" "),r("ol",[r("li",[t._v("如果上面的問題想通了，那麼試著調整 Cycles 的成份，分別讓時間取樣變成 0 0 4 0 以及 0 0 0 4。")]),t._v(" "),r("li",[t._v("現在試著調整 Cycles 的成份，讓時間取樣變成 0 0 3。")]),t._v(" "),r("li",[t._v("現在試著調整 Cycles 的成份，讓時間取樣變成 0 0 6 0 0 0。")])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);