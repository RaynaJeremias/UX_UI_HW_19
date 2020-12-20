//hover for about
$("ul li:first").mouseenter(function(){
    $("ul li:first").addClass("important");
});
$("ul li:first").mouseleave(function(){
    $("ul li:first").removeClass("important");
});
//hover for work
$("ul li:eq(1)").mouseenter(function(){
    $("ul li:eq(1)").addClass("important");
});
$("ul li:eq(1)").mouseleave(function(){
    $("ul li:eq(1)").removeClass("important");
});
//hover for resume
$("ul li:eq(2)").mouseenter(function(){
    $("ul li:eq(2)").addClass("important");
});
$("ul li:eq(2)").mouseleave(function(){
    $("ul li:eq(2)").removeClass("important");
});
//hover for contact
$("ul li:eq(3)").mouseenter(function(){
    $("ul li:eq(3)").addClass("important");
});
$("ul li:eq(3)").mouseleave(function(){
    $("ul li:eq(3)").removeClass("important");
});
    console.log("Your index.js file is loaded correctly!");