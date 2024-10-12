const widget = Vue.createApp({
    // template: '<h1>Marry You twice</h1>'
    data() {
        return {
            songs: [
                {
                    title: 'Sipendi Fighting',
                    artist: 'Charisma',
                    length: 3,
                    thumbnail: 'https://i.scdn.co/image/ab67616d0000b2732c8f9d28789bb49daa34e581',
                    isFav: false
                },
                {
                    title: 'Sofa Silahne',
                    artist: 'Lowsheen, Waniita Mos, Master KG',
                    length: 430,
                    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWE2yRFmTqx8tPzAHCVWAa-aAIohya37sXVA&s',
                    isFav: true
                },
                {
                    title: 'Sipendi Fighting',
                    artist: 'Charisma',
                    length: 3,
                    thumbnail: 'https://i.scdn.co/image/ab67616d0000b2732c8f9d28789bb49daa34e581',
                    isFav: false
                }
            ],
            showSongs: true,
            x:0,
            y:0
        }
    },
    methods: {
        updateLength() {
            this.length++
        },
        toggleShowSongs(){
            this.showSongs = !this.showSongs
        },
        handleEvent(e, data) {
            console.log('Sdala p & Paige', e)

            if(data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleIsFav(song) {
            song.isFav = !song.isFav
        }
    },
    computed: {
        filteredSongs(){
            return this.songs.filter((song)=> song.isFav)
        }
    }
})

widget.mount('#widget')