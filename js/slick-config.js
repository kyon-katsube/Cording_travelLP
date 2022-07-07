//メインビジュアルのスライダー設定
$( function() {
    $( '.p-slick__slider' ).slick( {
        fade:true,//切り替えをフェードで行う。初期値はfalse。
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
        speed:1000,//スライドの動きのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 1,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
        arrows: false,//左右の矢印あり
        dots: false,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
    });
});


//特徴 タブをクリックしたらクラス名付与
$( function() {
    $('.p-feature__box__tab a').on('click', function(){
      $(this).toggleClass('active');
    });

//タブをクリックしたら
    $('.p-feature__box__tab a').click(function(){
        //p-archive--の要素の順番を取得したものをidxという変数として定義する
        var idx=$('.p-feature__box__tab a').index(this);
        //取得した変数と同じ階層のデータを取得する
        $('.p-feature__box__wrapper__contents').removeClass('is-active').eq(idx).addClass('is-active');
      });
});

// 特徴 クリックしたら位置がずれるのを調整（上に80px)
$(function () {
  var headerHight = 80; //ヘッダーの高さを指定しheaderHightに代入
  $('a[href^="#"]').click(function () { //アンカーリンクをクリックでイベント処理
    var href = $(this).attr("href"); //アンカーリンクの属性を取得
    var target = $(href == "#" || href == "" ? "html" : href); //hrefの値が"#"または""だった場合"html"が、それ以外の場合はhrefをtargetに代入
    var position = target.offset().top - headerHight; //画面上部からターゲット要素までの距離 - ヘッダー高さをpositionに代入
    $("html, body").animate({ scrollTop: position }, 500, "swing");　// 取得したpositionの位置まで0.5秒でゆっくり移動
    return false; //clickイベント実行後にaタグのhrefリンクを打ち消す
  });
});


//コンセプト サムネイルクリックでメイン画像表示
$(function () {
    $(".js-sub-img img").on("click", function () {
      // mainに切り替えるimgのsrc取得
      img = $(this).attr("src");
      // fadeOutできたらsrc変更してfadeIn
      $(".js-main-img").fadeOut(200, function () {
        $(".js-main-img")
          .attr("src", img)
          .on("load", function () {
            $(this).fadeIn();
             });
      });
    });
  });

//ヘッダー固定用
var navPos = jQuery( '.p-header' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '.p-header' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
	if ( jQuery( this ).scrollTop() > navPos ) {
		jQuery( 'body' ).css( 'padding-top', navHeight );
		jQuery( '.p-header' ).addClass( 'm_fixed' );
	} else {
		jQuery( 'body' ).css( 'padding-top', 0 );
		jQuery( '.p-header' ).removeClass( 'm_fixed' );
	}
});


//慣性スクロール スマホ時は作動させない
  var width = $(window).width();
  if(width > 767){
      luxy.init({
          wrapper: '#luxy',
          targets : '.luxy-el',
          wrapperSpeed:  0.08
      });
  }


//ページトップリンクの設定
  //スクロールした際の動きを関数でまとめる
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      //上から300pxスクロールしたら
      $("#page-top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
      $("#page-top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
    } else {
      if ($("#page-top").hasClass("UpMove")) {
        //すでに#page-topにUpMoveというクラス名がついていたら
        $("#page-top").removeClass("UpMove"); //UpMoveというクラス名を除き
        $("#page-top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
      }
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });


  // #page-topをクリックした際の設定
  $("#page-top a").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });