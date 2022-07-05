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
    $('.p-feature__box__tab a').on('click', function() {
        $(this).addClass('active')},
            function(){
            $(this).removeClass('active');
        });   

//タブをクリックしたら
    $('.p-feature__box__tab a').click(function(){
        //p-archive--の要素の順番を取得したものをidxという変数として定義する
        var idx=$('.p-feature__box__tab a').index(this);
        //取得した変数と同じ階層のデータを取得する
        $('.p-feature__box__wrapper__contents').removeClass('is-active').eq(idx).addClass('is-active');
      });
});

//コンセプト　サムネイルクリックでメイン画像表示
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