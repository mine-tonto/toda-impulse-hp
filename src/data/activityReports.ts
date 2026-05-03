export type ActivityReport = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  gallery: string[];
  author: string;
  memo: string;
};

const shokosai = "/media/shokosai-2025-10-25";
const reikai = "/media/reikai-2025-09-10";

export const activityReports: ActivityReport[] = [
  {
    slug: "shokosai-2025-day1",
    date: "2025.10.25",
    category: "商工祭",
    title: "雨の商工祭、でもブースはずっとにぎやかでした",
    excerpt:
      "テントの下で声をかけ合いながら、子どもたちも大人も立ち寄ってくれた一日。準備は少し大変でしたが、終わってみるとやっぱりやってよかったです。",
    body: [
      "朝から雨で、正直どうなるかなと思いながらのスタートでした。テントを張って、机を並べて、濡れないように荷物を寄せて。そんな感じで少しバタバタしながらも、始まってみると地域の方が次々に立ち寄ってくれました。",
      "子どもたちの反応を見ながら声をかけたり、会員同士で交代しながら対応したり。普段の例会とはまた違う、街の中で活動している感じがありました。",
      "片付けのころにはみんな少し疲れていましたが、写真を見るといい顔ばかりです。こういう現場があるから、青年部っぽさが出るのかもしれません。",
    ],
    image: `${shokosai}/photo-18.jpg`,
    gallery: [
      `${shokosai}/photo-09.jpg`,
      `${shokosai}/photo-12.jpg`,
      `${shokosai}/photo-31.jpg`,
    ],
    author: "広報委員会",
    memo: "雨対策、来年はもう少し早めに準備したいです。",
  },
  {
    slug: "reikai-2025-september",
    date: "2025.09.10",
    category: "例会",
    title: "9月例会。仕事の話も、近況報告も、いつもの感じで",
    excerpt:
      "きちんと学ぶ時間もありつつ、休憩中の雑談から相談が始まるのが青年部らしいところです。",
    body: [
      "9月の例会では、各自の近況や事業の動きを共有しました。資料を見ながら進める時間もありますが、いちばん濃い話は休憩中に始まったりします。",
      "新しく参加した方もいたので、自己紹介は少し長めに。仕事の内容だけでなく、最近困っていることや、地域でやってみたいことも話してもらいました。",
      "すぐ仕事になる、というより、まず顔を合わせる。そこから相談しやすくなる。この積み重ねが青年部の土台です。",
    ],
    image: `${reikai}/photo-03.jpg`,
    gallery: [
      `${reikai}/photo-01.jpg`,
      `${reikai}/photo-08.jpg`,
      `${reikai}/photo-10.jpg`,
    ],
    author: "研修委員会",
    memo: "次回は初参加の方にも話しかけやすい席順にしてみます。",
  },
  {
    slug: "shokosai-prep-2025",
    date: "2025.10.24",
    category: "準備日",
    title: "前日準備。机を運んで、貼り紙して、だんだん形になってきた",
    excerpt:
      "派手な写真ではないですが、こういう準備の時間も活動の一部。手を動かしながら、自然と会話も増えていきます。",
    body: [
      "商工祭の前日は、備品の確認や設営準備をしました。机、イス、掲示物、配布物。ひとつずつ確認していくと、やることは意外とあります。",
      "誰かが指示を出しきるというより、気づいた人が動いて、足りないところを声に出す感じです。少しラフですが、現場ではこの動き方がちょうどいいこともあります。",
      "準備が進むにつれて、明日のイメージも見えてきました。地域の人に楽しんでもらえるように、最後まで調整しました。",
    ],
    image: `${shokosai}/photo-05.jpg`,
    gallery: [
      `${shokosai}/photo-22.jpg`,
      `${shokosai}/photo-35.jpg`,
      `${shokosai}/photo-43.jpg`,
    ],
    author: "地域活性委員会",
    memo: "ガムテープは多めに持っていく。これは毎回大事です。",
  },
];
