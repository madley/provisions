$("#accordion").on("show.bs.collapse",function(a){$(a.target).parent().addClass("active")}).on("hide.bs.collapse",function(a){$(a.target).parent().removeClass("active")});