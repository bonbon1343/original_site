$(function () {
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    // ハンバーガーメニューをクリックした時
    $(".toggle_btn").on("click", function () {
        $("header").toggleClass("open");
    });
    // メニューのリンクをクリックした時
    $(".menu-link").on("click", function () {
        $("header").toggleClass("open");
    });

    // #maskのエリアをクリックした時にメニューを閉じる
    $(".hamburger-menu").on("click", function () {
        // #maskをクリックしたときに実行する
        $("header").toggleClass("open");

    });
});

// カルーセル ------------------------------------------------
$('.slide02').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '16%',
    dots: false,
    arrows: true,
    prevArrow: '<div class="prev-arrow"></div>',
    nextArrow: '<div class="next-arrow"></div>',

    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: false,
            variableWidth: true, // スライド幅の自動計算を無効
        },
    },
    ]
});

$(".slide03").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerPadding: "24px",
                slidesToShow: 1,
            },
        },
    ],
});

/*=================================================
スクロール時の画像フェード表示
===================================================*/
// スクロール時のイベント
$(window).scroll(function () {
    // 画面がスクロールされた時に実行する

    $(".slidein").each(function () {
        // slideinクラスに対して順に処理を行う
        // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


        // スクロールした距離
        let scroll = $(window).scrollTop();
        // 現在のスクロール位置を取得する。
        // scrollTop()：要素のスクロール位置を取得

        // slideinクラスの要素までの距離
        let target = $(this).offset().top;

        // 画面の高さ
        let windowHeight = $(window).height();

        // slideinクラスの要素が画面内にきたタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
            $(".slideIn01").addClass("slideInAnime01");
            $(".slideIn02").addClass("slideInAnime02");
        }
    });


        $(".fadein").each(function () {
        // fadeinクラスに対して順に処理を行う
        // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


        // スクロールした距離
        let scroll = $(window).scrollTop();
        // 現在のスクロール位置を取得する。
        // scrollTop()：要素のスクロール位置を取得

        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;

        // 画面の高さ
        let windowHeight = $(window).height();

        // fadeinクラスの要素が画面内にきたタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
            $(".fadeIn01").addClass("fadeInAnime01");
            $(".fadeIn02").addClass("fadeInAnime02");
            $(".fadeIn03").addClass("fadeInAnime03");
            $(".fadeIn04").addClass("fadeInAnime04");
            $(".fadeIn05").addClass("fadeInAnime05");
            $(".fadeIn06").addClass("fadeInAnime06");
        }
    });

});
