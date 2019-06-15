<template lang="pug">
  v-container
    v-layout(row)
      v-flex(xs4) {{ character.name }}
      v-flex(xs2) {{ character.age }}
      v-flex(xs2) {{ character.sex }}
      v-flex(xs4) 職業: {{ character.job }}
    v-layout(row wrap)
      v-flex(xs3 v-for="status in status_list")
        span.status_name {{ status.name }}
        span.status_value : {{ status.value }}
      v-flex(xs3)
        span.status_name アイデア
        span.status_value : {{ Idea }}
      v-flex(xs3)
        span.status_name 幸運
        span.status_value : {{ Luck }}
      v-flex(xs3)
        span.status_name 知識
        span.status_value : {{ Knowledge }}
    v-layout(row wrap)
      v-flex.mr-4(xs3)
        v-text-field(v-model="currentHP" label="HP")
      v-flex.mr-4(xs3)
        v-text-field(v-model="currentMP" label="MP")
      v-flex.mr-4(xs3)
        v-text-field(v-model="currentSAN" label="SAN")
    v-layout(row wrap)
      v-flex(xs3 v-for="ability in ability_list")
        span.status_name {{ ability.name }}
        span.status_value : {{ ability.value }}
</template>

<script>
export default {
  data() {
    return {
      character: {
        name: "Yamada",
        age: "28",
        sex: "男",
        job: "探偵"
      },
      status_list: [
        { // 0
          name: "STR",
          value: this.get3D6()
        },
        { // 1
          name: "CON",
          value: this.get3D6()
        },
        { // 2
          name: "POW",
          value: this.get3D6()
        },
        { // 3
          name: "DEX",
          value: this.get3D6()
        },
        { // 4
          name: "APP",
          value: this.get3D6()
        },
        { // 5
          name: "SIZ",
          value: this.get3D6()
        },
        { // 6
          name: "INT",
          value: this.get2D6() + 6
        },
        { // 7
          name: "EDU",
          value: this.get3D6() + 3
        }
      ]
    };
  },

  computed: {
    // 配列番号での指定は引用のみで有効．編集時は要spliceメソッド．

    // 副次ステータス
    Idea: function() {
      return this.status_list[6].value * 5;
    },
    Luck: function() {
      return this.status_list[2].value * 5;
    },
    Knowledge: function() {
      return Math.min(this.status_list[7].value * 5, 99)
    },
    currentHP: function() {
      return Math.floor(
        (this.status_list[1].value + this.status_list[5].value) / 2
      );
    },
    currentMP: function() {
      return this.status_list[2].value;
    },
    currentSAN: function() {
      return this.status_list[2].value * 5;
    },

    // 技能
    ability_list: function() {
      let abilities = [
        { // 1
          name: "言いくるめ",
          value: 5
        },
        { // 2
          name: "医学",
          value: 5
        },
        { // 3
          name: "運転（自動車）",
          value: 20
        },
        { // 4
          name: "応急手当",
          value: 30
        },
        { // 5
          name: "オカルト",
          value: 5
        },
        { // 6
          name: "回避",
          value: this.status_list[3].value * 2
        },
        { // 7
          name: "化学",
          value: 1
        },
        { // 8
          name: "鍵開け",
          value: 1
        },
        { // 9
          name: "隠す",
          value: 15
        },
        { // 10
          name: "隠れる",
          value: 10
        },
        { // 11
          name: "機械修理",
          value: 20
        },
        { // 12
          name: "聞き耳",
          value: 25
        },
        { // 13
          name: "芸術",
          value: 5
        },
        { // 14
          name: "経理",
          value: 10
        },
        { // 15
          name: "考古学",
          value: 1
        },
        { // 16
          name: "コンピュータ",
          value: 1
        },
        { // 17
          name: "忍び歩き",
          value: 10
        },
        { // 18
          name: "写真術",
          value: 10
        },
        { // 19
          name: "重機械操作",
          value: 1
        },
        { // 20
          name: "乗馬",
          value: 5
        },
        { // 21
          name: "信用",
          value: 15
        },
        { // 22
          name: "心理学",
          value: 5
        },
        { // 23
          name: "人類学",
          value: 1
        },
        { // 24
          name: "水泳",
          value: 25
        },
        { // 25
          name: "製作",
          value: 5
        },
        { // 26
          name: "精神分析",
          value: 1
        },
        { // 27
          name: "生物学",
          value: 1
        },
        { // 28
          name: "説得",
          value: 15
        },
        { // 29
          name: "操縦",
          value: 1
        },
        { // 30
          name: "地質学",
          value: 1
        },
        { // 31
          name: "跳躍",
          value: 25
        },
        { // 32
          name: "追跡",
          value: 10
        },
        { // 33
          name: "電気修理",
          value: 10
        },
        { // 34
          name: "電子工学",
          value: 1
        },
        { // 35
          name: "天文学",
          value: 1
        },
        { // 36
          name: "投擲",
          value: 25
        },
        { // 37
          name: "登攀",
          value: 40
        },
        { // 38
          name: "図書館",
          value: 25
        },
        { // 39
          name: "ナビゲート",
          value: 10
        },
        { // 40
          name: "値切り",
          value: 5
        },
        { // 41
          name: "博物学",
          value: 10
        },
        { // 42
          name: "物理学",
          value: 1
        },
        { // 43
          name: "変装",
          value: 1
        },
        { // 44
          name: "法律",
          value: 5
        },
        { // 45
          name: "ほかの言語",
          value: 1
        },
        { // 46
          name: "母国語",
          value: Math.min(this.status_list[7].value * 5, 99)
        },
        { // 47
          name: "マーシャルアーツ",
          value: 1
        },
        { // 48
          name: "目星",
          value: 25
        },
        { // 49
          name: "薬学",
          value: 1
        },
        { // 50
          name: "歴史",
          value: 20
        },
        { // 51
          name: "拳銃",
          value: 20
        },
        { // 52
          name: "キック",
          value: 25
        },
        { // 53
          name: "組みつき",
          value: 25
        },
        { // 54
          name: "こぶし",
          value: 50
        },
        { // 55
          name: "頭突き",
          value: 10
        }
      ]

      // 職業技能割り振り
      const eduP = this.status_list[7].value
      for (let i = 0; i < 20; i++) {
        let tmpIndex = Math.floor(Math.random() * 55)
        // もし79以上なら，EDU21のとき99を超えるため除外
        if (abilities[tmpIndex].value > 78) {
          i--
        } else {
          abilities[tmpIndex].value += eduP
        }
      }

      // 興味技能割り振り
      const intP = this.status_list[6].value
      for (let i = 0; i < 10; i++) {
        let tmpIndex = Math.floor(Math.random() * 55)
        // もし82以上なら．INT18のとき99を超えるため除外
        if (abilities[tmpIndex].value > 82) {
          i--
        } else {
          abilities[tmpIndex].value += intP
        }
      }

      return abilities
    }
    // 探偵：職業技能「言いくるめ，鍵開け，心理学，追跡，図書館，法律，目星，（1：聞き耳，写真術，値切り，こぶし／パンチ）」
  },

  methods: {
    get2D6() {
      return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
    },
    get3D6() {
      return (
        Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1)
      );
    },
    get1D100() {
      return Math.floor(Math.random() * 100 + 1);
    }
  }
};
</script>