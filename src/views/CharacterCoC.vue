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
        {
          name: "STR", // 0
          value: this.get3D6()
        },
        {
          name: "CON", // 1
          value: this.get3D6()
        },
        {
          name: "POW", // 2
          value: this.get3D6()
        },
        {
          name: "DEX", // 3
          value: this.get3D6()
        },
        {
          name: "APP", // 4
          value: this.get3D6()
        },
        {
          name: "SIZ", // 5
          value: this.get3D6()
        },
        {
          name: "INT", // 6
          value: this.get2D6() + 6
        },
        {
          name: "EDU", // 7
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
      return this.status_list[7].value * 5;
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
        {
          name: "言いくるめ",
          value: 5
        },
        {
          name: "医学",
          value: 5
        },
        {
          name: "運転（自動車）",
          value: 20
        },
        {
          name: "応急手当",
          value: 30
        },
        {
          name: "オカルト",
          value: 5
        },
        {
          name: "回避",
          value: this.status_list[3].value * 2
        },
        {
          name: "化学",
          value: 1
        },
        {
          name: "鍵開け",
          value: 1
        },
        {
          name: "隠す",
          value: 15
        },
        {
          name: "隠れる",
          value: 10
        },
        {
          name: "機械修理",
          value: 20
        },
        {
          name: "聞き耳",
          value: 25
        },
        {
          name: "芸術",
          value: 5
        },
        {
          name: "経理",
          value: 10
        },
        {
          name: "考古学",
          value: 1
        },
        {
          name: "コンピュータ",
          value: 1
        },
        {
          name: "忍び歩き",
          value: 10
        },
        {
          name: "写真術",
          value: 10
        },
        {
          name: "重機械操作",
          value: 1
        },
        {
          name: "乗馬",
          value: 5
        },
        {
          name: "信用",
          value: 15
        },
        {
          name: "心理学",
          value: 5
        },
        {
          name: "人類学",
          value: 1
        },
        {
          name: "水泳",
          value: 25
        },
        {
          name: "製作",
          value: 5
        },
        {
          name: "精神分析",
          value: 1
        },
        {
          name: "生物学",
          value: 1
        },
        {
          name: "説得",
          value: 15
        },
        {
          name: "操縦",
          value: 1
        },
        {
          name: "地質学",
          value: 1
        },
        {
          name: "跳躍",
          value: 25
        },
        {
          name: "追跡",
          value: 10
        },
        {
          name: "電気修理",
          value: 10
        },
        {
          name: "電子工学",
          value: 1
        },
        {
          name: "天文学",
          value: 1
        },
        {
          name: "投擲",
          value: 25
        },
        {
          name: "登攀",
          value: 40
        },
        {
          name: "図書館",
          value: 25
        },
        {
          name: "ナビゲート",
          value: 10
        },
        {
          name: "値切り",
          value: 5
        },
        {
          name: "博物学",
          value: 10
        },
        {
          name: "物理学",
          value: 1
        },
        {
          name: "変装",
          value: 1
        },
        {
          name: "法律",
          value: 5
        },
        {
          name: "ほかの言語",
          value: 1
        },
        {
          name: "母国語",
          value: this.status_list[7].value * 5
        },
        {
          name: "マーシャルアーツ",
          value: 1
        },
        {
          name: "目星",
          value: 25
        },
        {
          name: "薬学",
          value: 1
        },
        {
          name: "歴史",
          value: 20
        },
        {
          name: "拳銃",
          value: 20
        },
        {
          name: "キック",
          value: 25
        },
        {
          name: "組みつき",
          value: 25
        },
        {
          name: "こぶし",
          value: 50
        },
        {
          name: "頭突き",
          value: 10
        }
      ]

      // 職業技能割り振り
      const eduP = this.status_list[7].value
      for (let i = 0; i < 20; i++) {
        let tmpIndex = Math.floor(Math.random() * 17)
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
        let tmpIndex = Math.floor(Math.random() * 17)
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