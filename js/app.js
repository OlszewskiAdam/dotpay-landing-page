$(function(){
    var List = {
        DOMElements: {
            lists: $(".benefits"),
            allLi: $(".benefits li"),
            allSpan: $(".benefits span")
        },
        setHeight: function(){
            var allSpan = List.DOMElements.allSpan;
            var height = 0;
            allSpan.each(function(){
                if(parseInt($(this).css("height")) > height){
                    height = parseInt($(this).css("height"));
                }
            });
            allSpan.css("height", height);
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
    List.setList(List.DOMElements.allLi)
    $(window).on('resize', function(){
        List.setHeight();
    })
})
