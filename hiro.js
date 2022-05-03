//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
    var width = $(window).width();
    if(width <= 768) {//横幅が768px以下の場合
        //has-childクラスがついたaタグのonイベントを複数登録を避けるため
        //offにして一旦初期状態へ
        $(".has-child>a").off('click');
        //has-childa クラスがついたaタグをクリックしたら
        $("has-child>a").on('click', function(){
            //aタグから見た親要素の<li>を取得し
            var parentElem = $(this).parent();
            //矢印方向を変えるためのクラスを付与して
            $(parentElem).toggleClass('active');
            //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
            $(parentElem).children('ul').stop().slideToggle(500);
            return false;//リンクの無効化
        });
    }else{//横幅が768pxの場合
        //has-shildクラスがついたaタグのonイベントをoff(無効)にし
        $("has-child>a").off('click');
        $("has-child>a").removeClass('active');//activクラスを削除
        //スライドトグルで動作したdisplayも無効化にする
        $('has-child').children('ul').css("display","");

    }
}

//ページがリサイズされたら動かしたい場合の記述
$(window).resizu(function(){
    mediaQueriesWin();/*ドロップダウンの関数を呼ぶ*/
});

//ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    mediaQueriesWin;/*ドロップダウンの関数を呼ぶ*/
});