var vue_box = new Vue (
    {
        el : "#vue_box",
        data :{
            images : [
                "https://awardsradar.com/wp-content/uploads/2020/09/image-39.jpeg",
                "https://media.ktvb.com/assets/ETONLINE/images/fd91eab1-d45d-4662-8014-744dc44c9b9c/fd91eab1-d45d-4662-8014-744dc44c9b9c_1140x641.png",
                "https://www.etonline.com/sites/default/files/styles/970xh/public/images/2020-01/sherry_pie_0.jpg?itok=t6WfYz1v",
                "https://www.etonline.com/sites/default/files/styles/970xh/public/images/2020-01/brita_0.jpg?itok=3MdpDLgE",
                "https://lh3.googleusercontent.com/proxy/qhsnWBjPAa6tS6tWJ723Darfueym1QxrM45nhvsN-n8qAqHusEb1FORalk2iB8D4vbpgsHFMcCHote0lgpet4Pk8kzNYHq1vp8Ly4WPJWG_TH27C5WKodKZ1LBYWnMOEj14VXw"
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