
(function($) {

    const Month = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    }

    events = [  { name: "Garden City Hotel, Patio Bar",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Aug, 18, 0, 0, 0, 0),
                  time: "7-10pm",
                  link: "https://www.gardencityhotel.com/",
                  image: "garden_city_hotel.jpg"
                },

                /*{ name: "St. James Lutheran Church Farmers Market",
                  where: "St. James, NY",
                  when: new Date(2022, 7-1, 23, 0, 0, 0, 0),
                  time: "10:30am-12:30pm",
                  link: "https://stjameslutheranchurch.com/",
                  image: "vegetables.jpg"
                },*/
                
                { name: "Prost Grill & Garten",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Aug, 19, 0, 0, 0, 0),
                  time: "7:30-10:30pm",
                  link: "https://www.prostgrill.com/",
                  image: "prost_grill.jpg"
                },

                /*{ name: "Eastern Front Brewing Co.",
                  where: "Mattituck, NY",
                  when: new Date(2022, Month.Aug, 20, 0, 0, 0, 0),
                  time: "4:30-6:30pm",
                  link: "https://www.instagram.com/easternfrontbrewing/?hl=en",
                  image: "brewing_co.jpg"
                },*/
                
                { name: "Garden City Hotel, Patio Bar",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Aug, 26, 0, 0, 0, 0),
                  time: "7-10pm",
                  link: "https://www.gardencityhotel.com/",
                  image: "garden_city_hotel.jpg"
                },

                { name: "Mickey's Ice Cream Shop",
                  where: "St James, NY",
                  when: new Date(2022, Month.Aug, 29, 0, 0, 0, 0),
                  time: "7:30-9pm",
                  link: "https://www.mickeys-icecream.com/",
                  image: "mickeys_ice_cream.png"
                },
                
                { name: "Garden City Hotel, Patio Bar",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Sep, 1, 0, 0, 0, 0),
                  time: "7-10pm",
                  link: "https://www.gardencityhotel.com/",
                  image: "garden_city_hotel.jpg"
                },
                
                { name: "Mario's Restaurant",
                  where: "East Setauket, NY",
                  when: new Date(2022, Month.Sep, 2, 0, 0, 0, 0),
                  time: "7-10pm",
                  link: "http://www.mariossetauket.com/",
                  image: "marios.jpg"
                },

                { name: "Sound Avenue Bistro",
                  where: "Riverhead, NY",
                  when: new Date(2022, Month.Sep, 4, 0, 0, 0, 0),
                  time: "1-4pm",
                  link: "https://soundbistroriverhead.com/",
                  image: "sound_ave_bistro.jpg"
                },
                
                { name: "Garden City Hotel, Patio Bar",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Sep, 8, 0, 0, 0, 0),
                  time: "6-9pm",
                  link: "https://www.gardencityhotel.com/",
                  image: "garden_city_hotel.jpg"
                },

                { name: "Sound Avenue Bistro",
                  where: "Riverhead, NY",
                  when: new Date(2022, Month.Sep, 9, 0, 0, 0, 0),
                  time: "5-8pm",
                  link: "https://soundbistroriverhead.com/",
                  image: "sound_ave_bistro.jpg"
                },
                
                { name: "Prost Grill & Garten",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Sep, 10, 0, 0, 0, 0),
                  time: "7:30-10:30pm",
                  link: "https://www.prostgrill.com/",
                  image: "prost_grill.jpg"
                },

                { name: "Sachem Public Library",
                  where: "Holbrook, NY",
                  when: new Date(2022, Month.Sep, 16, 0, 0, 0, 0),
                  time: "6:30-8pm",
                  link: "https://www.sachemlibrary.org/",
                  image: "sachem_lib.jpg"
                },

                { name: "Sound Avenue Bistro",
                  where: "Riverhead, NY",
                  when: new Date(2022, Month.Sep, 18, 0, 0, 0, 0),
                  time: "2-5pm",
                  link: "https://soundbistroriverhead.com/",
                  image: "sound_ave_bistro.jpg"
                },
                
                { name: "Garden City Hotel, Patio Bar",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Sep, 23, 0, 0, 0, 0),
                  time: "7-10pm",
                  link: "https://www.gardencityhotel.com/",
                  image: "garden_city_hotel.jpg"
                },
                
                { name: "Prost Grill & Garten",
                  where: "Garden City, NY",
                  when: new Date(2022, Month.Sep, 24, 0, 0, 0, 0),
                  time: "7:30-10:30pm",
                  link: "https://www.prostgrill.com/",
                  image: "prost_grill.jpg"
                },

                ];

    // generate string
    newHTML = '<center><h1 id="upcoming">UPCOMING EVENTS</h1></center>';

    var yesterday_this_time = new Date(new Date().getTime() - 86400000);
    for (let i = 0; i < events.length; i++) {
        if (events[i].when > yesterday_this_time) { // if the date of the event is prior to today's date
            newHTML += `
                <section>
                <a href="${events[i].link}" class="image"><img src="images/${events[i].image}" alt="" data-position="top center" /></a>
                <div class="content">
                    <div class="inner">
                        <h2> ${events[i].name} | ${events[i].where} </h2>
                        <p>${events[i].when.toDateString().substring(4, 10)}, ${events[i].time}.</p>
                    </div>
                </div>
                </section>&emsp;
            `;
        }
    }

    $('#one').html(newHTML);


    // events_section.html(`
        // <section>
        // <a href="https://www.instagram.com/easternfrontbrewing/?hl=en" class="image"><img src="images/brewing_co.jpg" alt="" data-position="top center" /></a>
        // <div class="content">
        //     <div class="inner">
        //         <h2>Eastern Front Brewing Co. | Mattituck, NY</h2>
        //         <p>July 17th, 4:30-6:30pm.</p>
        //     </div>
        // </div>
        // </section>
    // `);
})(jQuery);

