import { Buffer } from "buffer";

export const images = {
  back: require("../assets/images/back.png"),
  check: require("../assets/images/check.png"),
  checked_rect: require("../assets/images/cheked_rect.png"),
  filter: require("../assets/images/filter.png"),
  marker: require("../assets/images/marker.png"),
  pin: require("../assets/images/userpin.png"),
  rect: require("../assets/images/rect.png"),
  routing: require("../assets/images/routing.png"),
  setting: require("../assets/images/setting.png"),
  splash: require("../assets/images/splash.png"),
  ssplash: require("../assets/images/ssplash.png"),
  bus: require("../assets/images/buspin.png"),
  tracker: require("../assets/images/next.png"),
  compass: require("../assets/images/compass.png"),
  compassnorth: require("../assets/images/compass_north.png"),
};

export const colors = {
  primary: "#3A9E3E",
  white: "#FFFFFF",
  black: "#212121",
  darkblack: "#000000",
  lightgreen: "#326F4E",
  grey: "#F9F9F9",
};

export const MAPS_API_KEY = "AIzaSyDUCMJaiX1dvLNq2aHSfe858eUQlNjfqgE";

// export const TRACCAR_BASE_URL = 'https://demo.traccar.org/api/';
export const TRACCAR_BASE_URL = "https://server.traccar.org/api/";

export const endpoints = {
  devices: "devices",
  positions: "positions",
};

// const username = 'meerajoseph.dds@gmail.com';
// const password = 'admin';

const username = "ron_000823@hotmail.com";
const password = "ron_000823";

const basicToken = `${username}:${password}`;
export const base64Token = Buffer.from(basicToken).toString("base64");

export const south = [
  {
    latitude: 15.86864,
    longitude: -97.07373,
  },
  {
    latitude: 15.86823,
    longitude: -97.07258,
  },
  {
    latitude: 15.86749,
    longitude: -97.07237,
  },
  {
    latitude: 15.86626,
    longitude: -97.07205,
  },
  {
    latitude: 15.86545,
    longitude: -97.07178,
  },
  {
    latitude: 15.8646,
    longitude: -97.07154,
  },
  {
    latitude: 15.86327,
    longitude: -97.07119,
  },
  {
    latitude: 15.86297,
    longitude: -97.0711,
  },
  {
    latitude: 15.86291,
    longitude: -97.07115,
  },
  {
    latitude: 15.8623,
    longitude: -97.07012,
  },
  {
    latitude: 15.86209,
    longitude: -97.06974,
  },
  {
    latitude: 15.86182,
    longitude: -97.06908,
  },
  {
    latitude: 15.86177,
    longitude: -97.06888,
  },
  {
    latitude: 15.86172,
    longitude: -97.06841,
  },
  {
    latitude: 15.86172,
    longitude: -97.06792,
  },
  {
    latitude: 15.8618,
    longitude: -97.06724,
  },
  {
    latitude: 15.86186,
    longitude: -97.06693,
  },
  {
    latitude: 15.86185,
    longitude: -97.06669,
  },
  {
    latitude: 15.86206,
    longitude: -97.06538,
  },
  {
    latitude: 15.86212,
    longitude: -97.06501,
  },
  {
    latitude: 15.86236,
    longitude: -97.06336,
  },
  {
    latitude: 15.8625,
    longitude: -97.06243,
  },
  {
    latitude: 15.86252,
    longitude: -97.06216,
  },
  {
    latitude: 15.86251,
    longitude: -97.06162,
  },
  {
    latitude: 15.86239,
    longitude: -97.06106,
  },
  {
    latitude: 15.86221,
    longitude: -97.06056,
  },
  {
    latitude: 15.86189,
    longitude: -97.05989,
  },
  {
    latitude: 15.86169,
    longitude: -97.05955,
  },
  {
    latitude: 15.86147,
    longitude: -97.05926,
  },
  {
    latitude: 15.86114,
    longitude: -97.05897,
  },
  {
    latitude: 15.86098,
    longitude: -97.05889,
  },
  {
    latitude: 15.86067,
    longitude: -97.05877,
  },
  {
    latitude: 15.8602,
    longitude: -97.05855,
  },
  {
    latitude: 15.85911,
    longitude: -97.05804,
  },
  {
    latitude: 15.85889,
    longitude: -97.05791,
  },
  {
    latitude: 15.85844,
    longitude: -97.05763,
  },
  {
    latitude: 15.85812,
    longitude: -97.05739,
  },
  {
    latitude: 15.85713,
    longitude: -97.05659,
  },
  {
    latitude: 15.85678,
    longitude: -97.05627,
  },
  {
    latitude: 15.85623,
    longitude: -97.05579,
  },
  {
    latitude: 15.85496,
    longitude: -97.05467,
  },
  {
    latitude: 15.85284,
    longitude: -97.05281,
  },
  {
    latitude: 15.85198,
    longitude: -97.05207,
  },
  {
    latitude: 15.85115,
    longitude: -97.05133,
  },
  {
    latitude: 15.85006,
    longitude: -97.05039,
  },
  {
    latitude: 15.84884,
    longitude: -97.04931,
  },
  {
    latitude: 15.84845,
    longitude: -97.04902,
  },
  {
    latitude: 15.84844,
    longitude: -97.04902,
  },
  {
    latitude: 15.84841,
    longitude: -97.04902,
  },
  {
    latitude: 15.84839,
    longitude: -97.049,
  },
  {
    latitude: 15.84835,
    longitude: -97.04895,
  },
  {
    latitude: 15.84802,
    longitude: -97.04861,
  },
  {
    latitude: 15.84745,
    longitude: -97.04809,
  },
  {
    latitude: 15.84645,
    longitude: -97.0472,
  },
  {
    latitude: 15.84508,
    longitude: -97.046,
  },
  {
    latitude: 15.84467,
    longitude: -97.04565,
  },
  {
    latitude: 15.84275,
    longitude: -97.04397,
  },
  {
    latitude: 15.84078,
    longitude: -97.04223,
  },
  {
    latitude: 15.84001,
    longitude: -97.04155,
  },
  {
    latitude: 15.83946,
    longitude: -97.04109,
  },
  {
    latitude: 15.83882,
    longitude: -97.04052,
  },
  {
    latitude: 15.83776,
    longitude: -97.0396,
  },
  {
    latitude: 15.8365,
    longitude: -97.03849,
  },
  {
    latitude: 15.83297,
    longitude: -97.0354,
  },
  {
    latitude: 15.8319,
    longitude: -97.03444,
  },
  {
    latitude: 15.8299,
    longitude: -97.0327,
  },
  {
    latitude: 15.82884,
    longitude: -97.0318,
  },
  {
    latitude: 15.82814,
    longitude: -97.03116,
  },
  {
    latitude: 15.82762,
    longitude: -97.03066,
  },
  {
    latitude: 15.82743,
    longitude: -97.03042,
  },
  {
    latitude: 15.82725,
    longitude: -97.03012,
  },
  {
    latitude: 15.8271,
    longitude: -97.02977,
  },
  {
    latitude: 15.82703,
    longitude: -97.02951,
  },
  {
    latitude: 15.82696,
    longitude: -97.02903,
  },
  {
    latitude: 15.82695,
    longitude: -97.02882,
  },
  {
    latitude: 15.82695,
    longitude: -97.02863,
  },
  {
    latitude: 15.82698,
    longitude: -97.02847,
  },
  {
    latitude: 15.82702,
    longitude: -97.02821,
  },
  {
    latitude: 15.82713,
    longitude: -97.02775,
  },
  {
    latitude: 15.82735,
    longitude: -97.02663,
  },
  {
    latitude: 15.82748,
    longitude: -97.02575,
  },
  {
    latitude: 15.82755,
    longitude: -97.02499,
  },
  {
    latitude: 15.82756,
    longitude: -97.02455,
  },
  {
    latitude: 15.82753,
    longitude: -97.02423,
  },
  {
    latitude: 15.82745,
    longitude: -97.02386,
  },
  {
    latitude: 15.82734,
    longitude: -97.02357,
  },
  {
    latitude: 15.82711,
    longitude: -97.02313,
  },
  {
    latitude: 15.82666,
    longitude: -97.02238,
  },
  {
    latitude: 15.82661,
    longitude: -97.02221,
  },
  {
    latitude: 15.82593,
    longitude: -97.02123,
  },
  {
    latitude: 15.82574,
    longitude: -97.02089,
  },
  {
    latitude: 15.82552,
    longitude: -97.02054,
  },
  {
    latitude: 15.82529,
    longitude: -97.0202,
  },
  {
    latitude: 15.82468,
    longitude: -97.01923,
  },
  {
    latitude: 15.82408,
    longitude: -97.0183,
  },
  {
    latitude: 15.82369,
    longitude: -97.0178,
  },
  {
    latitude: 15.82325,
    longitude: -97.01736,
  },
  {
    latitude: 15.82271,
    longitude: -97.01688,
  },
  {
    latitude: 15.82228,
    longitude: -97.01652,
  },
  {
    latitude: 15.82211,
    longitude: -97.01634,
  },
  {
    latitude: 15.82058,
    longitude: -97.01503,
  },
  {
    latitude: 15.81767,
    longitude: -97.01255,
  },
  {
    latitude: 15.81698,
    longitude: -97.01195,
  },
  {
    latitude: 15.81667,
    longitude: -97.01167,
  },
  {
    latitude: 15.81629,
    longitude: -97.01121,
  },
  {
    latitude: 15.81614,
    longitude: -97.01096,
  },
  {
    latitude: 15.81606,
    longitude: -97.01079,
  },
  {
    latitude: 15.8158,
    longitude: -97.00992,
  },
  {
    latitude: 15.81534,
    longitude: -97.00836,
  },
  {
    latitude: 15.81504,
    longitude: -97.00723,
  },
  {
    latitude: 15.8141,
    longitude: -97.00394,
  },
  {
    latitude: 15.814,
    longitude: -97.00361,
  },
  {
    latitude: 15.81314,
    longitude: -97.00066,
  },
  {
    latitude: 15.81054,
    longitude: -96.99162,
  },
  {
    latitude: 15.81007,
    longitude: -96.98996,
  },
  {
    latitude: 15.80964,
    longitude: -96.9884,
  },
  {
    latitude: 15.80883,
    longitude: -96.9856,
  },
  {
    latitude: 15.80794,
    longitude: -96.98249,
  },
  {
    latitude: 15.80752,
    longitude: -96.98107,
  },
  {
    latitude: 15.80604,
    longitude: -96.9759,
  },
  {
    latitude: 15.80558,
    longitude: -96.97429,
  },
  {
    latitude: 15.8049,
    longitude: -96.97195,
  },
  {
    latitude: 15.80445,
    longitude: -96.97035,
  },
  {
    latitude: 15.80338,
    longitude: -96.9666,
  },
  {
    latitude: 15.8027,
    longitude: -96.96424,
  },
  {
    latitude: 15.80239,
    longitude: -96.96315,
  },
  {
    latitude: 15.8021,
    longitude: -96.96227,
  },
  {
    latitude: 15.80143,
    longitude: -96.96028,
  },
  {
    latitude: 15.80149,
    longitude: -96.9602,
  },
  {
    latitude: 15.80155,
    longitude: -96.96012,
  },
  {
    latitude: 15.8016,
    longitude: -96.9601,
  },
  {
    latitude: 15.80171,
    longitude: -96.96011,
  },
  {
    latitude: 15.80181,
    longitude: -96.96014,
  },
  {
    latitude: 15.80228,
    longitude: -96.9623,
  },
  {
    latitude: 15.80253,
    longitude: -96.96329,
  },
  {
    latitude: 15.8028,
    longitude: -96.96422,
  },
  {
    latitude: 15.80366,
    longitude: -96.96723,
  },
  {
    latitude: 15.80387,
    longitude: -96.96796,
  },
  {
    latitude: 15.80448,
    longitude: -96.97003,
  },
  {
    latitude: 15.80481,
    longitude: -96.97127,
  },
  {
    latitude: 15.80503,
    longitude: -96.97195,
  },
  {
    latitude: 15.80523,
    longitude: -96.97267,
  },
  {
    latitude: 15.8057,
    longitude: -96.97258,
  },
  {
    latitude: 15.80619,
    longitude: -96.97252,
  },
  {
    latitude: 15.80647,
    longitude: -96.97249,
  },
  {
    latitude: 15.80708,
    longitude: -96.97247,
  },
  {
    latitude: 15.80791,
    longitude: -96.97246,
  },
  {
    latitude: 15.80952,
    longitude: -96.97237,
  },
  {
    latitude: 15.81042,
    longitude: -96.97232,
  },
  {
    latitude: 15.81114,
    longitude: -96.97231,
  },
  {
    latitude: 15.81136,
    longitude: -96.97233,
  },
  {
    latitude: 15.81143,
    longitude: -96.97236,
  },
  {
    latitude: 15.81151,
    longitude: -96.97244,
  },
  {
    latitude: 15.81172,
    longitude: -96.97277,
  },
  {
    latitude: 15.81191,
    longitude: -96.97304,
  },
  {
    latitude: 15.81197,
    longitude: -96.97309,
  },
  {
    latitude: 15.81215,
    longitude: -96.97316,
  },
  {
    latitude: 15.81313,
    longitude: -96.97336,
  },
  {
    latitude: 15.81344,
    longitude: -96.9734,
  },
  {
    latitude: 15.81372,
    longitude: -96.97339,
  },
  {
    latitude: 15.81555,
    longitude: -96.973,
  },
  {
    latitude: 15.81617,
    longitude: -96.97288,
  },
  {
    latitude: 15.81677,
    longitude: -96.97277,
  },
  {
    latitude: 15.81734,
    longitude: -96.97268,
  },
  {
    latitude: 15.8176,
    longitude: -96.97269,
  },
  {
    latitude: 15.81794,
    longitude: -96.97276,
  },
  {
    latitude: 15.81852,
    longitude: -96.97285,
  },
  {
    latitude: 15.81876,
    longitude: -96.97287,
  },
  {
    latitude: 15.8191,
    longitude: -96.97286,
  },
  {
    latitude: 15.81938,
    longitude: -96.97282,
  },
  {
    latitude: 15.82001,
    longitude: -96.97272,
  },
  {
    latitude: 15.82037,
    longitude: -96.97267,
  },
  {
    latitude: 15.82059,
    longitude: -96.97268,
  },
  {
    latitude: 15.82079,
    longitude: -96.9728,
  },
  {
    latitude: 15.8209,
    longitude: -96.9728,
  },
  {
    latitude: 15.82097,
    longitude: -96.97273,
  },
  {
    latitude: 15.821,
    longitude: -96.97258,
  },
  {
    latitude: 15.821,
    longitude: -96.97244,
  },
  {
    latitude: 15.82103,
    longitude: -96.97212,
  },
  {
    latitude: 15.82113,
    longitude: -96.97184,
  },
  {
    latitude: 15.8212,
    longitude: -96.97168,
  },
  {
    latitude: 15.82138,
    longitude: -96.9715,
  },
  {
    latitude: 15.82152,
    longitude: -96.97139,
  },
  {
    latitude: 15.8218,
    longitude: -96.97124,
  },
  {
    latitude: 15.82205,
    longitude: -96.97114,
  },
  {
    latitude: 15.82216,
    longitude: -96.97112,
  },
];

export const north = [
  {
    latitude: 15.82221,
    longitude: -96.97111,
  },
  {
    latitude: 15.82205,
    longitude: -96.97114,
  },
  {
    latitude: 15.8218,
    longitude: -96.97124,
  },
  {
    latitude: 15.82152,
    longitude: -96.97139,
  },
  {
    latitude: 15.82138,
    longitude: -96.9715,
  },
  {
    latitude: 15.8212,
    longitude: -96.97168,
  },
  {
    latitude: 15.82113,
    longitude: -96.97184,
  },
  {
    latitude: 15.82103,
    longitude: -96.97212,
  },
  {
    latitude: 15.821,
    longitude: -96.97244,
  },
  {
    latitude: 15.821,
    longitude: -96.97258,
  },
  {
    latitude: 15.82097,
    longitude: -96.97273,
  },
  {
    latitude: 15.8209,
    longitude: -96.9728,
  },
  {
    latitude: 15.82079,
    longitude: -96.9728,
  },
  {
    latitude: 15.82059,
    longitude: -96.97268,
  },
  {
    latitude: 15.82037,
    longitude: -96.97267,
  },
  {
    latitude: 15.82001,
    longitude: -96.97272,
  },
  {
    latitude: 15.81938,
    longitude: -96.97282,
  },
  {
    latitude: 15.8191,
    longitude: -96.97286,
  },
  {
    latitude: 15.81876,
    longitude: -96.97287,
  },
  {
    latitude: 15.81852,
    longitude: -96.97285,
  },
  {
    latitude: 15.81794,
    longitude: -96.97276,
  },
  {
    latitude: 15.8176,
    longitude: -96.97269,
  },
  {
    latitude: 15.81734,
    longitude: -96.97268,
  },
  {
    latitude: 15.81677,
    longitude: -96.97277,
  },
  {
    latitude: 15.81617,
    longitude: -96.97288,
  },
  {
    latitude: 15.81555,
    longitude: -96.973,
  },
  {
    latitude: 15.81372,
    longitude: -96.97339,
  },
  {
    latitude: 15.81344,
    longitude: -96.9734,
  },
  {
    latitude: 15.81313,
    longitude: -96.97336,
  },
  {
    latitude: 15.81215,
    longitude: -96.97316,
  },
  {
    latitude: 15.81197,
    longitude: -96.97309,
  },
  {
    latitude: 15.81191,
    longitude: -96.97304,
  },
  {
    latitude: 15.81172,
    longitude: -96.97277,
  },
  {
    latitude: 15.81151,
    longitude: -96.97244,
  },
  {
    latitude: 15.81143,
    longitude: -96.97236,
  },
  {
    latitude: 15.81136,
    longitude: -96.97233,
  },
  {
    latitude: 15.81114,
    longitude: -96.97231,
  },
  {
    latitude: 15.81042,
    longitude: -96.97232,
  },
  {
    latitude: 15.80952,
    longitude: -96.97237,
  },
  {
    latitude: 15.80791,
    longitude: -96.97246,
  },
  {
    latitude: 15.80708,
    longitude: -96.97247,
  },
  {
    latitude: 15.80647,
    longitude: -96.97249,
  },
  {
    latitude: 15.8057,
    longitude: -96.97258,
  },
  {
    latitude: 15.80523,
    longitude: -96.97267,
  },
  {
    latitude: 15.80557,
    longitude: -96.97385,
  },
  {
    latitude: 15.80577,
    longitude: -96.97456,
  },
  {
    latitude: 15.80639,
    longitude: -96.97671,
  },
  {
    latitude: 15.80786,
    longitude: -96.98191,
  },
  {
    latitude: 15.80827,
    longitude: -96.98336,
  },
  {
    latitude: 15.81033,
    longitude: -96.9905,
  },
  {
    latitude: 15.81287,
    longitude: -96.99937,
  },
  {
    latitude: 15.81493,
    longitude: -97.00652,
  },
  {
    latitude: 15.81523,
    longitude: -97.00761,
  },
  {
    latitude: 15.81564,
    longitude: -97.0091,
  },
  {
    latitude: 15.81601,
    longitude: -97.01037,
  },
  {
    latitude: 15.81614,
    longitude: -97.01072,
  },
  {
    latitude: 15.81622,
    longitude: -97.01088,
  },
  {
    latitude: 15.81641,
    longitude: -97.01121,
  },
  {
    latitude: 15.81663,
    longitude: -97.01148,
  },
  {
    latitude: 15.81703,
    longitude: -97.01188,
  },
  {
    latitude: 15.81887,
    longitude: -97.01346,
  },
  {
    latitude: 15.82166,
    longitude: -97.0158,
  },
  {
    latitude: 15.82293,
    longitude: -97.01692,
  },
  {
    latitude: 15.82337,
    longitude: -97.0173,
  },
  {
    latitude: 15.82374,
    longitude: -97.01764,
  },
  {
    latitude: 15.8239,
    longitude: -97.01783,
  },
  {
    latitude: 15.8244,
    longitude: -97.01851,
  },
  {
    latitude: 15.8245,
    longitude: -97.01866,
  },
  {
    latitude: 15.82475,
    longitude: -97.01913,
  },
  {
    latitude: 15.825,
    longitude: -97.01952,
  },
  {
    latitude: 15.82531,
    longitude: -97.02,
  },
  {
    latitude: 15.82541,
    longitude: -97.02016,
  },
  {
    latitude: 15.82641,
    longitude: -97.02168,
  },
  {
    latitude: 15.82716,
    longitude: -97.02287,
  },
  {
    latitude: 15.8273,
    longitude: -97.0231,
  },
  {
    latitude: 15.82751,
    longitude: -97.02358,
  },
  {
    latitude: 15.8276,
    longitude: -97.02385,
  },
  {
    latitude: 15.82763,
    longitude: -97.02402,
  },
  {
    latitude: 15.82766,
    longitude: -97.02434,
  },
  {
    latitude: 15.82766,
    longitude: -97.02452,
  },
  {
    latitude: 15.82762,
    longitude: -97.02462,
  },
  {
    latitude: 15.82756,
    longitude: -97.02467,
  },
  {
    latitude: 15.82755,
    longitude: -97.02499,
  },
  {
    latitude: 15.82752,
    longitude: -97.02533,
  },
  {
    latitude: 15.82748,
    longitude: -97.02575,
  },
  {
    latitude: 15.82735,
    longitude: -97.02663,
  },
  {
    latitude: 15.82713,
    longitude: -97.02775,
  },
  {
    latitude: 15.82698,
    longitude: -97.02847,
  },
  {
    latitude: 15.82705,
    longitude: -97.02865,
  },
  {
    latitude: 15.82705,
    longitude: -97.02883,
  },
  {
    latitude: 15.82706,
    longitude: -97.02916,
  },
  {
    latitude: 15.82711,
    longitude: -97.02949,
  },
  {
    latitude: 15.82717,
    longitude: -97.02974,
  },
  {
    latitude: 15.82735,
    longitude: -97.03013,
  },
  {
    latitude: 15.82749,
    longitude: -97.03039,
  },
  {
    latitude: 15.82774,
    longitude: -97.03067,
  },
  {
    latitude: 15.82805,
    longitude: -97.03098,
  },
  {
    latitude: 15.82869,
    longitude: -97.03156,
  },
  {
    latitude: 15.82995,
    longitude: -97.03264,
  },
  {
    latitude: 15.83195,
    longitude: -97.0344,
  },
  {
    latitude: 15.83347,
    longitude: -97.03572,
  },
  {
    latitude: 15.83443,
    longitude: -97.03657,
  },
  {
    latitude: 15.83688,
    longitude: -97.03872,
  },
  {
    latitude: 15.83828,
    longitude: -97.03995,
  },
  {
    latitude: 15.8392,
    longitude: -97.04074,
  },
  {
    latitude: 15.83972,
    longitude: -97.04123,
  },
  {
    latitude: 15.84001,
    longitude: -97.04145,
  },
  {
    latitude: 15.84083,
    longitude: -97.04219,
  },
  {
    latitude: 15.84204,
    longitude: -97.04324,
  },
  {
    latitude: 15.84389,
    longitude: -97.04486,
  },
  {
    latitude: 15.84472,
    longitude: -97.0456,
  },
  {
    latitude: 15.84593,
    longitude: -97.04665,
  },
  {
    latitude: 15.84701,
    longitude: -97.0476,
  },
  {
    latitude: 15.84756,
    longitude: -97.04806,
  },
  {
    latitude: 15.84808,
    longitude: -97.04854,
  },
  {
    latitude: 15.84846,
    longitude: -97.04883,
  },
  {
    latitude: 15.84847,
    longitude: -97.04883,
  },
  {
    latitude: 15.8485,
    longitude: -97.04885,
  },
  {
    latitude: 15.84853,
    longitude: -97.0489,
  },
  {
    latitude: 15.84888,
    longitude: -97.04924,
  },
  {
    latitude: 15.84925,
    longitude: -97.04957,
  },
  {
    latitude: 15.85091,
    longitude: -97.05101,
  },
  {
    latitude: 15.85189,
    longitude: -97.05189,
  },
  {
    latitude: 15.8525,
    longitude: -97.0524,
  },
  {
    latitude: 15.85277,
    longitude: -97.05266,
  },
  {
    latitude: 15.8532,
    longitude: -97.05302,
  },
  {
    latitude: 15.8538,
    longitude: -97.05354,
  },
  {
    latitude: 15.85544,
    longitude: -97.055,
  },
  {
    latitude: 15.85719,
    longitude: -97.05651,
  },
  {
    latitude: 15.85818,
    longitude: -97.05732,
  },
  {
    latitude: 15.85894,
    longitude: -97.05782,
  },
  {
    latitude: 15.85915,
    longitude: -97.05795,
  },
  {
    latitude: 15.86011,
    longitude: -97.05841,
  },
  {
    latitude: 15.8607,
    longitude: -97.05868,
  },
  {
    latitude: 15.86101,
    longitude: -97.0588,
  },
  {
    latitude: 15.86125,
    longitude: -97.05893,
  },
  {
    latitude: 15.86141,
    longitude: -97.05907,
  },
  {
    latitude: 15.8616,
    longitude: -97.05928,
  },
  {
    latitude: 15.86184,
    longitude: -97.05962,
  },
  {
    latitude: 15.86215,
    longitude: -97.06026,
  },
  {
    latitude: 15.86237,
    longitude: -97.06079,
  },
  {
    latitude: 15.86249,
    longitude: -97.06115,
  },
  {
    latitude: 15.86259,
    longitude: -97.06168,
  },
  {
    latitude: 15.8626,
    longitude: -97.06212,
  },
  {
    latitude: 15.86258,
    longitude: -97.06244,
  },
  {
    latitude: 15.86246,
    longitude: -97.06336,
  },
  {
    latitude: 15.86239,
    longitude: -97.06373,
  },
  {
    latitude: 15.86226,
    longitude: -97.06459,
  },
  {
    latitude: 15.86213,
    longitude: -97.0654,
  },
  {
    latitude: 15.86206,
    longitude: -97.06583,
  },
  {
    latitude: 15.86195,
    longitude: -97.06684,
  },
  {
    latitude: 15.86182,
    longitude: -97.06776,
  },
  {
    latitude: 15.8618,
    longitude: -97.06803,
  },
  {
    latitude: 15.86181,
    longitude: -97.06848,
  },
  {
    latitude: 15.86184,
    longitude: -97.06884,
  },
  {
    latitude: 15.86189,
    longitude: -97.06908,
  },
  {
    latitude: 15.86208,
    longitude: -97.06954,
  },
  {
    latitude: 15.86227,
    longitude: -97.0699,
  },
  {
    latitude: 15.86292,
    longitude: -97.07101,
  },
  {
    latitude: 15.86356,
    longitude: -97.07207,
  },
  {
    latitude: 15.86364,
    longitude: -97.07183,
  },
  {
    latitude: 15.86386,
    longitude: -97.07191,
  },
  {
    latitude: 15.86392,
    longitude: -97.07194,
  },
  {
    latitude: 15.86414,
    longitude: -97.07199,
  },
  {
    latitude: 15.86444,
    longitude: -97.07207,
  },
  {
    latitude: 15.86537,
    longitude: -97.07218,
  },
  {
    latitude: 15.86563,
    longitude: -97.07226,
  },
  {
    latitude: 15.86573,
    longitude: -97.07231,
  },
  {
    latitude: 15.86586,
    longitude: -97.07243,
  },
  {
    latitude: 15.86647,
    longitude: -97.07305,
  },
  {
    latitude: 15.86677,
    longitude: -97.07338,
  },
  {
    latitude: 15.86697,
    longitude: -97.07364,
  },
  {
    latitude: 15.86725,
    longitude: -97.07398,
  },
  {
    latitude: 15.86749,
    longitude: -97.07407,
  },
  {
    latitude: 15.8679,
    longitude: -97.07418,
  },
  {
    latitude: 15.86826,
    longitude: -97.0742,
  },
  {
    latitude: 15.86876,
    longitude: -97.07413,
  },
  {
    latitude: 15.86867,
    longitude: -97.07381,
  },
  {
    latitude: 15.86864,
    longitude: -97.07373,
  },
];

export const parkingTolynn = [
  { latitude: 42.02221499820198, longitude: -93.64866586036632 },
  { latitude: 42.016127684893526, longitude: -93.64845572666164 },
  { latitude: 42.015641475427095, longitude: -93.64633841056825 },
];

export const lynnToparking = [
  { latitude: 42.015641475427095, longitude: -93.64633841056825 },
  { latitude: 42.016127684893526, longitude: -93.64845572666164 },
  { latitude: 42.02221499820198, longitude: -93.64866586036632 },
];

export const losodeliToRinconada = [
  {
    latitude: 15.86238,
    longitude: -97.07344,
  },
  {
    latitude: 15.86223,
    longitude: -97.07402,
  },
  {
    latitude: 15.86216,
    longitude: -97.07464,
  },
  {
    latitude: 15.86212,
    longitude: -97.07504,
  },
  {
    latitude: 15.86244,
    longitude: -97.07499,
  },
  {
    latitude: 15.86293,
    longitude: -97.07491,
  },
  {
    latitude: 15.86297,
    longitude: -97.07426,
  },
  {
    latitude: 15.86301,
    longitude: -97.07377,
  },
  {
    latitude: 15.86308,
    longitude: -97.07355,
  },
  {
    latitude: 15.86331,
    longitude: -97.07295,
  },
  {
    latitude: 15.86338,
    longitude: -97.07271,
  },
];

export const rinconadaToLosodeli = [
  { latitude: 15.86338, longitude: -97.07271 },
  { latitude: 15.86331, longitude: -97.07295 },
  { latitude: 15.86256, longitude: -97.07276 },
  { latitude: 15.86238, longitude: -97.07344 },
];

export const PECentroToColotepec = [
  { longitude: -97.07548673673678, latitude: 15.87009399291329 },
  { longitude: -96.93846008199449, latitude: 15.89787503963582 },
];

export const ColotepecToPECentro = [
  { longitude: -96.93847369970359, latitude: 15.89789526995231 },
  { longitude: -97.07538364895137, latitude: 15.86977303726343 },
];

export const PECentroToPochutla = [
  { longitude: -97.0754635527463, latitude: 15.87014423039335 },
  { longitude: -96.46604174681008, latitude: 15.744519172326 },
];

export const PochutlaToPECentro = [
  { longitude: -96.46605754821816, latitude: 15.74443931615824 },
  { longitude: -96.46606628288072, latitude: 15.74434323835939 },
  { longitude: -96.4660885063057, latitude: 15.74433234320282 },
  { longitude: -96.46618025259279, latitude: 15.74436027686283 },
  { longitude: -96.46631590590253, latitude: 15.7444054996612 },
  { longitude: -96.46642064824508, latitude: 15.74442405667356 },
  { longitude: -96.46652349509765, latitude: 15.74444259863012 },
  { longitude: -96.46659116195821, latitude: 15.74444900814946 },
  { longitude: -96.46663962553689, latitude: 15.74444513843959 },
  { longitude: -96.46664151401376, latitude: 15.7443578357081 },
  { longitude: -96.46666471091459, latitude: 15.74425530853618 },
  { longitude: -96.46671344090669, latitude: 15.74409156525262 },
  { longitude: -96.46677560564926, latitude: 15.74391989107428 },
  { longitude: -96.46685301852767, latitude: 15.7437419723278 },
  { longitude: -96.46698826567791, latitude: 15.74338942666007 },
  { longitude: -96.46706837080684, latitude: 15.74312446072182 },
  { longitude: -96.46715911006676, latitude: 15.74289808915283 },
  { longitude: -96.46724886462501, latitude: 15.74265763223701 },
  { longitude: -96.46731243197272, latitude: 15.74250442942926 },
  { longitude: -96.46738313316348, latitude: 15.74244308969708 },
  { longitude: -96.46746260911658, latitude: 15.74236010417648 },
  { longitude: -96.46752756642393, latitude: 15.74231094066885 },
  { longitude: -96.46766152512384, latitude: 15.74219850152379 },
  { longitude: -96.4678225237394, latitude: 15.74204629339354 },
  { longitude: -96.46790925967224, latitude: 15.74196257355709 },
  { longitude: -96.4680050380571, latitude: 15.74187879284663 },
  { longitude: -96.46815568855331, latitude: 15.74168380026414 },
  { longitude: -96.46842753007607, latitude: 15.74129902642177 },
  { longitude: -96.46862564482058, latitude: 15.74102541992281 },
  { longitude: -96.46880264732297, latitude: 15.74083773568379 },
  { longitude: -96.46893579533504, latitude: 15.7407483208835 },
  { longitude: -96.46909563801555, latitude: 15.74068054496707 },
  { longitude: -96.46922839988518, latitude: 15.74063682626397 },
  { longitude: -96.46940196582598, latitude: 15.74061244369275 },
  { longitude: -96.4696882862016, latitude: 15.74056861464514 },
  { longitude: -96.47009555427572, latitude: 15.74051127052627 },

  { longitude: -97.07534698157473, latitude: 15.86976249108867 },
];

export const adinathToHoney = [
  { latitude: 21.202582, longitude: 72.787212 },
  { latitude: 21.202828, longitude: 72.789318 },
];

export const honeyToAdinath = [
  { latitude: 21.20272, longitude: 72.789329 },
  { latitude: 21.202475, longitude: 72.787243 },
];

export const adinathToPrime = [
  { latitude: 21.202650750085198, longitude: 72.78703823829858 },
  { latitude: 21.20282141883622, longitude: 72.7892926349314 },
  { latitude: 21.202860803903903, longitude: 72.78966210923335 },
  { latitude: 21.203394689329734, longitude: 72.79393084483307 },
  { latitude: 21.202964580380755, longitude: 72.79371626812032 },
];

export const PrimeToAdinath = [
  { latitude: 21.202964580380755, longitude: 72.79371626812032 },
  { latitude: 21.203287275603802, longitude: 72.79379726228998 },
  { latitude: 21.203060343104745, longitude: 72.79172525581735 },
  { latitude: 21.202700251159975, longitude: 72.78908596221461 },
  { latitude: 21.202650750085198, longitude: 72.78703823829858 },
];
