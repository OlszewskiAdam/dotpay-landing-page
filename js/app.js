$(function(){
    var List = {
        DOMElements: {
            lists: $(".benefits"),
            allLi: $(".benefits li"),
            allSpan: $(".benefits span")
        },
        setHeight: function(){
            var allSpan = List.DOMElements.allSpan;
            var allLi = List.DOMElements.allLi;
            var height = parseInt($(allLi[4]).css("height")) / 2;
            var oneLineSpan = $(".one_line");
            allSpan.css("height", height).css("line-height", (height / 2) + "px" );
            oneLineSpan.css("line-height", height + "px");
        },
        setList: function(listElements){
            listElements.on("click", function(event){
                event.preventDefault();
                var eventTarget = $(event.target);
                var description = 0;
                if(eventTarget.next().hasClass("list_description")){
                    description = eventTarget.next();
                }
                else if(eventTarget.children().last().hasClass("list_description")){
                    description = eventTarget.children().last();
                }
                else if(eventTarget.hasClass("list_description")){
                    description = eventTarget;
                };
                if(description != 0){
                    description.toggle(300)
                };
            })
        },
    };
    List.setHeight();
    List.setList(List.DOMElements.allLi);
    $(window).on('resize', function(){
        List.setHeight();
    });
    $("#submit").on("click", function(event){
        event.preventDefault();
        event.stopPropagation();
    })
})
