var vue_box = new Vue (
    {
        el : "#vue_box",
        data :{
            images : [
                "img/penguin.jpg",
                "img/iceland.jpg",
                "img/fog.jpg",
                "img/mountain.jpg",
                "img/fox.jpg",
                "img/tiger.jpg",
                "img/aurora.jpg",
                "img/treebamboo.jpg",
                "img/iceberg.jpg",
                "img/waterfall.jpg",
                "img/octopus.jpg"
            ],
            alt : [
                "foto di un pinguino",
                "paesaggio innevato",
                "colline nebbiose al mattino",
                "volpe tra il vento",
                "tigre che abbraccia un albero",
                "aurora boreale nordica",
                "albero che si interseca in una piantagione di bambu",
                "rare foto di iceberg",
                "cascata naturale",
                "polpo che si nasconde all'interno di una conchiglia"
            ],
            img_index: 0
        },
        methods : {
            
            nextImg : function () {
                this.img_index ++ ;

                if (this.img_index == this.images.length) {
                    this.img_index = 0;
                }
            },
            
            prevImg : function () {
                this.img_index -- ;

                if (this.img_index < 0) {
                    this.img_index = this.images.length - 1;
                }
            }
        }
    }
)