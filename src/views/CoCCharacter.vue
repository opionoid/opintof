<template lang="pug">
  v-container(max-height="fill-height")
    //- 基本情報
    v-layout(row)
      v-flex(xs4)
        v-text-field(v-model="character.name" label="名前")
      v-flex(xs2)
        v-text-field(v-model="character.age" label="年齢")
      v-flex(xs2)
        v-text-field(v-model="character.sex" label="性別")
      v-flex(xs4)
        .tmp {{ currentJobName }}
    //- ステータス
    v-layout(row wrap)
      //-: メインステータス
      v-flex(xs8)
        v-layout(row wrap)
          v-flex(xs4 v-for="status in status_list")
            span {{ status.name }}
            span : {{ status.value }}
      //-: サブステータス
      v-flex(xs4)
        v-layout(column)
          v-flex(xs4)
            span アイデア
            span : {{ Idea }}
          v-flex(xs4)
            span 幸運
            span : {{ Luck }}
          v-flex(xs4)
            span 知識
            span : {{ Knowledge }}
    //- 可変ステータス
    v-layout(row wrap)
      v-flex(xs4)
        v-text-field(v-model="currentHP" label="HP")
      v-flex(xs4)
        v-text-field(v-model="currentMP" label="MP")
      v-flex(xs4)
        v-text-field(v-model="currentSAN" label="SAN")
    //- 技能
    v-layout(row wrap)
      v-flex(xs4 v-for="ability in ability_list")
        span {{ ability.name }}
        span : {{ ability.value }}
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      character: {
        name: "",
        age: "",
        sex: "",
        job: ""
      },
      status_list: [
        {
          // 0
          name: "STR",
          value: this.get3D6()
        },
        {
          // 1
          name: "DEX",
          value: this.get3D6()
        },
        {
          // 2
          name: "INT",
          value: this.get2D6() + 6
        },
        {
          // 3
          name: "CON",
          value: this.get3D6()
        },
        {
          // 4
          name: "APP",
          value: this.get3D6()
        },
        {
          // 5
          name: "POW",
          value: this.get3D6()
        },
        {
          // 6
          name: "SIZ",
          value: this.get2D6() + 6
        },
        {
          // 7
          name: "EDU",
          value: this.get3D6() + 3
        }
      ]
    };
  },

  computed: {
    // サブステータス
    Idea: function() {
      return this.status_list[2].value * 5;
    },
    Luck: function() {
      return this.status_list[5].value * 5;
    },
    Knowledge: function() {
      return Math.min(this.status_list[7].value * 5, 99);
    },
    currentHP: function() {
      return Math.floor(
        (this.status_list[3].value + this.status_list[6].value) / 2
      );
    },
    currentMP: function() {
      return this.status_list[2].value;
    },
    currentSAN: function() {
      return this.status_list[2].value * 5;
    },

    // 職業技能をVuexから取得
    ...mapState("CoC", ["currentJobName", "currentJobAbilities"]),
    // 技能
    ability_list: function() {
      let abilities = [
        {
          // 0
          name: "言いくるめ",
          value: 5
        },
        {
          // 1
          name: "医学",
          value: 5
        },
        {
          // 2
          name: "運転（自動車）",
          value: 20
        },
        {
          // 3
          name: "応急手当",
          value: 30
        },
        {
          // 4
          name: "オカルト",
          value: 5
        },
        {
          // 5
          name: "回避",
          value: this.status_list[1].value * 2
        },
        {
          // 6
          name: "化学",
          value: 1
        },
        {
          // 7
          name: "鍵開け",
          value: 1
        },
        {
          // 8
          name: "隠す",
          value: 15
        },
        {
          // 9
          name: "隠れる",
          value: 10
        },
        {
          // 10
          name: "機械修理",
          value: 20
        },
        {
          // 11
          name: "聞き耳",
          value: 25
        },
        {
          // 12
          name: "芸術",
          value: 5
        },
        {
          // 13
          name: "経理",
          value: 10
        },
        {
          // 14
          name: "考古学",
          value: 1
        },
        {
          // 15
          name: "コンピュータ",
          value: 1
        },
        {
          // 16
          name: "忍び歩き",
          value: 10
        },
        {
          // 17
          name: "写真術",
          value: 10
        },
        {
          // 18
          name: "重機械操作",
          value: 1
        },
        {
          // 19
          name: "乗馬",
          value: 5
        },
        {
          // 20
          name: "信用",
          value: 15
        },
        {
          // 21
          name: "心理学",
          value: 5
        },
        {
          // 22
          name: "人類学",
          value: 1
        },
        {
          // 23
          name: "水泳",
          value: 25
        },
        {
          // 24
          name: "製作",
          value: 5
        },
        {
          // 25
          name: "精神分析",
          value: 1
        },
        {
          // 26
          name: "生物学",
          value: 1
        },
        {
          // 27
          name: "説得",
          value: 15
        },
        {
          // 28
          name: "操縦",
          value: 1
        },
        {
          // 29
          name: "地質学",
          value: 1
        },
        {
          // 30
          name: "跳躍",
          value: 25
        },
        {
          // 31
          name: "追跡",
          value: 10
        },
        {
          // 32
          name: "電気修理",
          value: 10
        },
        {
          // 33
          name: "電子工学",
          value: 1
        },
        {
          // 34
          name: "天文学",
          value: 1
        },
        {
          // 35
          name: "投擲",
          value: 25
        },
        {
          // 36
          name: "登攀",
          value: 40
        },
        {
          // 37
          name: "図書館",
          value: 25
        },
        {
          // 38
          name: "ナビゲート",
          value: 10
        },
        {
          // 39
          name: "値切り",
          value: 5
        },
        {
          // 40
          name: "博物学",
          value: 10
        },
        {
          // 41
          name: "物理学",
          value: 1
        },
        {
          // 42
          name: "変装",
          value: 1
        },
        {
          // 43
          name: "法律",
          value: 5
        },
        {
          // 44
          name: "ほかの言語",
          value: 1
        },
        {
          // 45
          name: "母国語",
          value: Math.min(this.status_list[7].value * 5, 99)
        },
        {
          // 46
          name: "マーシャルアーツ",
          value: 1
        },
        {
          // 47
          name: "目星",
          value: 25
        },
        {
          // 48
          name: "薬学",
          value: 1
        },
        {
          // 49
          name: "歴史",
          value: 20
        },
        {
          // 50
          name: "拳銃",
          value: 20
        },
        {
          // 51
          name: "キック",
          value: 25
        },
        {
          // 52
          name: "組みつき",
          value: 25
        },
        {
          // 53
          name: "こぶし",
          value: 50
        },
        {
          // 54
          name: "頭突き",
          value: 10
        }
      ];

      // 職業技能割り振り
      const eduP = this.status_list[7].value;
      let tmpArray = [];
      Object.assign(tmpArray, this.currentJobAbilities);
      for (let i = 0; i < 20; i++) {
        let tmpIndex = tmpArray[Math.floor(Math.random() * tmpArray.length)];
        // もし79以上なら，EDU21のとき99を超えるため除外
        if (abilities[tmpIndex].value > 78) {
          i--;
        } else {
          abilities[tmpIndex].value += eduP;
        }
      }

      // 興味技能割り振り
      const intP = this.status_list[2].value;
      for (let i = 0; i < 10; i++) {
        let tmpIndex = Math.floor(Math.random() * 54);
        // もし82以上なら．INT18のとき99を超えるため除外
        if (abilities[tmpIndex].value > 82) {
          i--;
        } else {
          abilities[tmpIndex].value += intP;
        }
      }

      return abilities;
    }
    // 探偵：職業技能「言いくるめ，鍵開け，心理学，追跡，図書館，法律，目星，（1：聞き耳，写真術，値切り，こぶし／パンチ）」
  },

  methods: {
    get2D6() {
      return (
        Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1)
      );
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