$(document).ready(function() {
    if ($(window).load(function() {
            $(".loader").delay(3500).fadeOut("slow", function() {
                $(this).remove()
            })
        }))
    // s backtotop
        var toggleHeight = $(window).outerHeight() * 1;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $("#hoax1").click(function() {
        $(".hoax1").fadeIn("slow", function() {});
        $(".fakta1").fadeOut();
    });
    $("#fakta1").click(function() {
        $(".fakta1").fadeIn("slow", function() {});
        $(".hoax1").fadeOut();
    });
    $("#hoax2").click(function() {
        $(".hoax2").fadeIn("slow", function() {});
        $(".fakta2").fadeOut();
    });
    $("#fakta2").click(function() {
        $(".fakta2").fadeIn("slow", function() {});
        $(".hoax2").fadeOut();
    });
    $("#hoax3").click(function() {
        $(".hoax3").fadeIn("slow", function() {});
        $(".fakta3").fadeOut();
    });
    $("#fakta3").click(function() {
        $(".fakta3").fadeIn("slow", function() {});
        $(".hoax3").fadeOut();
    });
    $("#hoax4").click(function() {
        $(".hoax4").fadeIn("slow", function() {});
        $(".fakta4").fadeOut();
    });
    $("#fakta4").click(function() {
        $(".fakta4").fadeIn("slow", function() {});
        $(".hoax4").fadeOut();
    });
});
// slider
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: ".swiper-pagination",
    effect: 'ease',
    speed: 1000,
    slidesPerView: '1',
    paginationClickable: true,
    autoplay: false,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "slide",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});


// animated
// bodymovin
var animation = bodymovin.loadAnimation({
    container: document.getElementById('hero'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/geometri.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('sinyal'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/sinyal.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('guru'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont3/guru.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('dokter'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont3/dokter.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('slide-1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont4/slide1.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('slide-2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont4/slide2.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('slide-3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont4/slide3.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/loader.json',
    name: 'myAnimation',
});

// parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
});

// tab accordion
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown);
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    };

    var accordion = new Accordion($('#accordion'), false);
});

// spin
(function() {
    let app = new Vue({
        el: "#app",
        data: {
            prizes: [],
            prizes_2017: [],
            prizes_2018: [],
            prize_name: "",
            prize_icon: "",
            prize_rotate: [],
            prize_transition: "",
            each_deg: 0,
            rotate_deg: 0,
            start_deg: 0,
            current_deg: 0,
            index: 0,
            current_year: 2017,
            duration: 3000,
            time_remaining: 20,
            num: 0,
            numbers: [],
            isToggle: false,
            isClicked: false,
            isShow: true
        },
        mounted() {
            let vm = this;
            vm.initPrize();
        },
        watch: {
            current_year: {
                handler: "restart"
            }
        },
        computed: {
            containerClass() {
                let vm = this;
                return vm.current_year === 2017 ?
                    "container" :
                    "container container-large";
            },
            itemClass() {
                let vm = this;
                return vm.current_year === 2017 ?
                    "item item-skew" :
                    "item item-skew-large";
            },
            contentClass() {
                let vm = this;
                return vm.current_year === 2017 ?
                    "item-content" :
                    "item-content item-content-large";
            },
            countClass() {
                let vm = this;
                return vm.current_year === 2017 ? "count" : "count count-large";
            }
        },
        methods: {
            prizeActive() {
                let vm = this;
                setTimeout(() => {
                    vm.$refs.item[vm.index].classList.value = `${vm.itemClass} active`;
                }, vm.duration);
                console.log("item active");
            },
            setCurrentYear(year) {
                let vm = this;
                if (vm.isClicked) return;
                vm.current_year = year;
            },
            restart() {
                let vm = this;
                vm.$refs.item[vm.index].classList.value = vm.itemClass;
                if (vm.current_year === 2017) {
                    vm.time_remaining = 20;
                    vm.reset();
                    vm.initPrize();
                } else if (vm.current_year === 2018) {
                    vm.time_remaining = 120;
                    vm.reset();
                    vm.initPrize_2018();
                }
            },
            reset() {
                let vm = this;
                vm.isShow = true;
                vm.index = 0;
                vm.prize_name = "";
                vm.prize_icon = "";
                vm.prize_rotate = [];
                vm.numbers = [];
                vm.start_deg = 0;
                vm.rotate_deg = `rotate(0deg)`;
                vm.current_deg = 0;
                vm.isClicked = false;
                vm.prize_transition = `none`;
                console.log("RESET");
            },
            initPrize() {
                let vm = this;
                vm.prizes_2017 = [{
                    name: "Kades",
                    title: "Kepala Desa",
                    text: "Membantu Kades mengirim laporan data masyarakat miskin, penanganan stunting, kesehatan, pendidikan dan lainnya.",
                }, {
                    name: "Siswa",
                    title: "Siswa",
                    text: "Memudahkan siswa mengerjakan tugas dan bahan pelajaran. ",
                }, {
                    name: "Tentara",
                    title: "Tentara",
                    text: "Memberikan tentara akses koordinasi dengan jajaran atas  seperti markas satgas, korem dan kodam. ",
                }, {
                    name: "Guru",
                    title: "Guru",
                    text: "Memudahkan pencarian materi pengajaran.",
                }, {
                    name: "Nakes",
                    title: "Tenaga Kesehatan",
                    text: "Meningkatkan akses informasi dan layanan kesehatan.",
                }];
                vm.num = vm.prizes_2017.length;
                vm.degree(vm.num);
                vm.prizes = vm.prizes_2017;
                vm.numberArray();
            },

            degree(num) {
                let vm = this;
                for (let i = 1; i <= num; i++) {
                    let deg = 360 / num;
                    vm.each_deg = deg;
                    let eachDeg;
                    eachDeg = i * deg;
                    vm.prize_rotate.push(eachDeg);
                }
            },
            numberArray() {
                let vm = this;
                vm.numbers = vm.prizes.map((prize, index) => {
                    return index;
                });
            },
            rotateHandler(num) {
                let vm = this;
                vm.prizes.filter((prize, index) => {
                    let filterArray;
                    if (prize.count <= 0) {
                        let filterArray = vm.numbers.filter((num) => {
                            return num !== index;
                        });
                        vm.numbers = filterArray;
                    }
                });

                if (vm.time_remaining > 0) {
                    vm.$refs.item[vm.index].classList.value = vm.itemClass;
                    vm.prize_draw(num);
                } else if (vm.time_remaining <= 0) {
                    vm.$refs.item[vm.index].classList.value = vm.itemClass;
                    vm.restart();
                }
            },
            prize_draw(num) {

                let vm = this;
                if (vm.isClicked) return;
                vm.isShow = vm.isClicked;
                vm.$refs.item[vm.index].classList.value = vm.itemClass;

                vm.index = vm.numbers[Math.floor(Math.random() * vm.numbers.length)];
                console.log("1.Remaining grades", vm.numbers);

                let circle = 4;
                let degree;

                degree =
                    vm.start_deg +
                    circle * 360 +
                    vm.prize_rotate[vm.index] -
                    (vm.start_deg % 360);

                vm.start_deg = degree;
                vm.current_year === 2017 ?
                    (vm.rotate_deg = `rotate(${degree}deg)`) :
                    (vm.rotate_deg = `rotate(${degree - vm.each_deg / 2}deg)`);

                vm.prize_transition = `all ${
  vm.duration / 1000
}s cubic-bezier(0.42, 0, 0.2, 0.91)`;
                vm.time_remaining--;
                vm.isClicked = true;

                let remainder = vm.start_deg % 360;
                if (remainder <= 0) {
                    vm.current_year === 2017 ?
                        (vm.current_deg = remainder + 360) :
                        (vm.current_deg = remainder + 360 - vm.each_deg / 2);
                } else if (remainder > 0) {
                    vm.current_year === 2017 ?
                        (vm.current_deg = remainder) :
                        (vm.current_deg = remainder - vm.each_deg / 2);
                }
                console.log("2.perform rotation", degree, "index", vm.index);

                let prize = vm.prizes[vm.index];
                vm.prize_text = prize.text;
                vm.prize_title = prize.title;
                vm.prize_icon = prize.icon;
                if (vm.current_year === 2018) {
                    vm.prize_icon = "card_giftcard";
                }
                vm.prizeActive();
                setTimeout(() => {
                    prize.count--;
                    console.log(
                        "3.Rotation angle:",
                        vm.current_deg,
                        "Prize:",
                        prize.name,
                        "The remaining amount:",
                        prize.count,
                        " index",
                        vm.index
                    );
                }, vm.duration);

                setTimeout(() => {
                    if (vm.isClicked === true) {
                        vm.isClicked = false;
                    }
                }, vm.duration);
            }
        }
    });
})();


// tambahan
(function() {

    var ParticleNetworkAnimation, PNA;
    ParticleNetworkAnimation = PNA = function() {};

    PNA.prototype.init = function(element) {
        this.$el = $(element);

        this.container = element;
        this.canvas = document.createElement('canvas');
        this.sizeCanvas();
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.particleNetwork = new ParticleNetwork(this);

        this.bindUiActions();

        return this;
    };

    PNA.prototype.bindUiActions = function() {
        $(window).on('resize', function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.sizeCanvas();
            this.particleNetwork.createParticles();
        }.bind(this));
    };

    PNA.prototype.sizeCanvas = function() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    };

    var Particle = function(parent, x, y) {
        this.network = parent;
        this.canvas = parent.canvas;
        this.ctx = parent.ctx;
        this.particleColor = returnRandomArrayitem(this.network.options.particleColors);
        this.radius = getLimitedRandom(1.5, 2.5);
        this.opacity = 0;
        this.x = x || Math.random() * this.canvas.width;
        this.y = y || Math.random() * this.canvas.height;
        this.velocity = {
            x: (Math.random() - 0.5) * parent.options.velocity,
            y: (Math.random() - 0.5) * parent.options.velocity
        };

    };

    Particle.prototype.update = function() {
        if (this.opacity < 1) {
            this.opacity += 0.01;
        } else {
            this.opacity = 1;
        }
        if (this.x > this.canvas.width + 100 || this.x < -100) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y > this.canvas.height + 100 || this.y < -100) {
            this.velocity.y = -this.velocity.y;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    };

    Particle.prototype.draw = function() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.particleColor;
        this.ctx.globalAlpha = this.opacity;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    };

    var ParticleNetwork = function(parent) {
        this.options = {
            velocity: 1,
            density: 15000,
            netLineDistance: 200,
            netLineColor: '#ffffff',
            particleColors: ['#ffffff']
        };
        this.canvas = parent.canvas;
        this.ctx = parent.ctx;

        this.init();
    };

    ParticleNetwork.prototype.init = function() {
        this.createParticles(true);

        this.animationFrame = requestAnimationFrame(this.update.bind(this));

        this.bindUiActions();
    };

    ParticleNetwork.prototype.createParticles = function(isInitial) {

        var me = this;
        this.particles = [];
        var quantity = this.canvas.width * this.canvas.height / this.options.density;

        if (isInitial) {
            var counter = 0;
            clearInterval(this.createIntervalId);
            this.createIntervalId = setInterval(function() {
                if (counter < quantity - 1) {
                    this.particles.push(new Particle(this));
                } else {
                    clearInterval(me.createIntervalId);
                }
                counter++;
            }.bind(this), 250);
        } else {
            for (var i = 0; i < quantity; i++) {
                this.particles.push(new Particle(this));
            }
        }
    };

    ParticleNetwork.prototype.createInteractionParticle = function() {
        this.interactionParticle = new Particle(this);
        this.interactionParticle.velocity = {
            x: 0,
            y: 0
        };

        this.particles.push(this.interactionParticle);
        return this.interactionParticle;
    };

    ParticleNetwork.prototype.removeInteractionParticle = function() {
        var index = this.particles.indexOf(this.interactionParticle);
        if (index > -1) {
            this.interactionParticle = undefined;
            this.particles.splice(index, 1);
        }
    };

    ParticleNetwork.prototype.update = function() {
        if (this.canvas) {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.globalAlpha = 1;

            for (var i = 0; i < this.particles.length; i++) {
                for (var j = this.particles.length - 1; j > i; j--) {
                    var distance, p1 = this.particles[i],
                        p2 = this.particles[j];

                    distance = Math.min(Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y));
                    if (distance > this.options.netLineDistance) {
                        continue;
                    }

                    distance = Math.sqrt(
                        Math.pow(p1.x - p2.x, 2) +
                        Math.pow(p1.y - p2.y, 2));

                    if (distance > this.options.netLineDistance) {
                        continue;
                    }

                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.options.netLineColor;
                    this.ctx.globalAlpha = (this.options.netLineDistance - distance) / this.options.netLineDistance * p1.opacity * p2.opacity;
                    this.ctx.lineWidth = 0.7;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }

            for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
                this.particles[i].draw();
            }

            if (this.options.velocity !== 0) {
                this.animationFrame = requestAnimationFrame(this.update.bind(this));
            }

        } else {
            cancelAnimationFrame(this.animationFrame);
        }
    };

    ParticleNetwork.prototype.bindUiActions = function() {

        this.spawnQuantity = 3;
        this.mouseIsDown = false;
        this.touchIsMoving = false;

        this.onMouseMove = function(e) {
            if (!this.interactionParticle) {
                this.createInteractionParticle();
            }
            this.interactionParticle.x = e.offsetX;
            this.interactionParticle.y = e.offsetY;
        }.bind(this);

        this.onTouchMove = function(e) {
            e.preventDefault();
            this.touchIsMoving = true;
            if (!this.interactionParticle) {
                this.createInteractionParticle();
            }
            this.interactionParticle.x = e.changedTouches[0].clientX;
            this.interactionParticle.y = e.changedTouches[0].clientY;
        }.bind(this);

        this.onMouseDown = function(e) {
            this.mouseIsDown = true;
            var counter = 0;
            var quantity = this.spawnQuantity;
            var intervalId = setInterval(function() {
                if (this.mouseIsDown) {
                    if (counter === 1) {
                        quantity = 1;
                    }
                    for (var i = 0; i < quantity; i++) {
                        if (this.interactionParticle) {
                            this.particles.push(new Particle(this, this.interactionParticle.x, this.interactionParticle.y));
                        }
                    }
                } else {
                    clearInterval(intervalId);
                }
                counter++;
            }.bind(this), 50);
        }.bind(this);

        this.onTouchStart = function(e) {
            e.preventDefault();
            setTimeout(function() {
                if (!this.touchIsMoving) {
                    for (var i = 0; i < this.spawnQuantity; i++) {
                        this.particles.push(new Particle(this, e.changedTouches[0].clientX, e.changedTouches[0].clientY));
                    }
                }
            }.bind(this), 200);
        }.bind(this);

        this.onMouseUp = function(e) {
            this.mouseIsDown = false;
        }.bind(this);

        this.onMouseOut = function(e) {
            this.removeInteractionParticle();
        }.bind(this);

        this.onTouchEnd = function(e) {
            e.preventDefault();
            this.touchIsMoving = false;
            this.removeInteractionParticle();
        }.bind(this);

        this.canvas.addEventListener('mousemove', this.onMouseMove);
        this.canvas.addEventListener('touchmove', this.onTouchMove);
        this.canvas.addEventListener('mousedown', this.onMouseDown);
        this.canvas.addEventListener('touchstart', this.onTouchStart);
        this.canvas.addEventListener('mouseup', this.onMouseUp);
        this.canvas.addEventListener('mouseout', this.onMouseOut);
        this.canvas.addEventListener('touchend', this.onTouchEnd);
    };

    ParticleNetwork.prototype.unbindUiActions = function() {
        if (this.canvas) {
            this.canvas.removeEventListener('mousemove', this.onMouseMove);
            this.canvas.removeEventListener('touchmove', this.onTouchMove);
            this.canvas.removeEventListener('mousedown', this.onMouseDown);
            this.canvas.removeEventListener('touchstart', this.onTouchStart);
            this.canvas.removeEventListener('mouseup', this.onMouseUp);
            this.canvas.removeEventListener('mouseout', this.onMouseOut);
            this.canvas.removeEventListener('touchend', this.onTouchEnd);
        }
    };

    var getLimitedRandom = function(min, max, roundToInteger) {
        var number = Math.random() * (max - min) + min;
        if (roundToInteger) {
            number = Math.round(number);
        }
        return number;
    };

    var returnRandomArrayitem = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    pna = new ParticleNetworkAnimation();
    pna.init($('.particle-network-animation')[0]);

})();

$(function() {
    jQuery.scrollSpeed(250, 1900);
});

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});