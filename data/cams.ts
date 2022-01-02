const cams = [
  // Data from old static myBeachCams.com
  // Kauai
  // Princeville
  {
    title: 'St. Regis Princeville Cam',
    webcamUrl: 'http://www.seehawaiilive.com/kauai/princeville-resorts',
    oldImageUrl: 'https://www.mybeachcams.com/images/stregisprincevillecam.jpg',
    description:
      'This live cam is from the The St. Regis Princeville Resort. It is Java based tilt pan and zoom webcam near Puupoa Beach.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: 'Princeville',
  },
  {
    title: 'Westin Princeville Cam',
    webcamUrl: 'http://www.seehawaiilive.com/wpv-cam.cfm',
    oldImageUrl: 'https://www.mybeachcams.com/images/westinprincevillecam.jpg',
    description:
      'This is a live Java streaming pan,tilt and zoom live cam from the Westin Princeville Ocean Resort.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: 'Princeville',
  },
  {
    title: 'Parrish Poipu Cam',
    webcamUrl: 'https://www.parrishkauai.com/kauai-webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/parrish-poipu-cam.jpg',
    description: 'Large live streaming beach cam from Poipu beach.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: 'Poipu',
  },
  {
    title: 'Sheraton Poipu Webcam',
    webcamUrl: 'http://www.seehawaiilive.com/kauai/kauai-resorts',
    oldImageUrl: 'https://www.mybeachcams.com/images/sheraton-poipu-webcam.jpg',
    description: 'Live streaming Kauai web cam from Poipu Beach.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: 'Poipu',
  },
  {
    title: 'Poipu Beach Hale Cam',
    webcamUrl: 'http://www.poipubeachkauai.com/Site/Webcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/poipu-beach-hale-cam.jpg',
    description: 'Streaming cam from Brennecke’s Beach Cottage.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: 'Poipu',
  },
  // Lihue Beach Cams
  {
    title: 'Lihue Webcam',
    webcamUrl: 'http://www.marriotthawaii.com/kauai-marriott-resort/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/lihue-webcam.jpg',
    description:
      'Live streaming cam from the  Marriot overlooking Kalapaki Beach in Lihue.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: 'Lihue',
  },
  // More
  {
    title: 'Whalers Cove Beach Cam',
    webcamUrl: 'http://www.whalerscoveresort.com/kauai-webcam/webcam.php',
    oldImageUrl:
      'https://www.mybeachcams.com/images/whalers-cove_beach_cam.jpg',
    description:
      'Two streaming webcams from Whalers Cove Resort on Poipu Beach.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: '',
  },
  {
    title: 'Blue Hawaiian Helicopter Cam, Kauai',
    webcamUrl: 'http://www.bluehawaiian.com/kauai/webcam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/bluehawaiianhelicoptercam.jpg',
    description:
      "This a view from the Blue Hawaiian Helicopter's  maintenance facility at Lihue airport.",
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: '',
  },
  {
    title: 'Hanalei Bay Cam',
    webcamUrl: 'http://www.balihai.com/Blog/kauai-hd-webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/hanalei-bay-cam.jpg',
    description: 'Large streaming HD web cam requires Java plug-in.',
    country: 'US',
    state: 'HI',
    area: 'Kauai',
    subArea: '',
  },
  // Oahu
  // Waikiki Beach Cams
  {
    title: 'Sheraton Waikiki Surf Cam',
    webcamUrl: 'http://www.seehawaiilive.com/sw-cam-surf.cfm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/sheratonwaikikisurfcam.jpg',
    description:
      'This Waikiki surf cam is streaming live from the Sheraton Waikiki Hotel overlooking the south shore of Oahu.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Waikiki',
  },
  {
    title: "Moana Surfrider's Beach Cam",
    webcamUrl: 'http://www.seehawaiilive.com/ms-cam.cfm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/moanasurfridersbeachcam.jpg',
    description:
      'Streaming webcam overlooking the heart of Waikiki Beach with Diamond Head in the distance.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Waikiki',
  },
  {
    title: 'Waikiki Aquarium Cam',
    webcamUrl: 'http://www.waikikiaquarium.org/experience/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/waikiki-aquarium-cam.jpg',
    description:
      'See the Hawaiian monk seal on the Waikiki Aquarium live streaming webcam.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Waikiki',
  },
  {
    title: 'Royal Hawaiian Waikiki Surf Cam',
    webcamUrl: 'http://www.seehawaiilive.com/rh-cam.cfm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/royalhawaiianwaikikisurfcam.jpg',
    description:
      'Streaming webcam for the Royal Hawaiian Resort on Waikiki Beach. Pan, tilt and zoom with presets.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Waikiki',
  },
  // Honolulu
  {
    title: 'Kahala Resort Cam',
    webcamUrl: 'https://www.kahalaresort.com/Our-Resort/Galleries/Web-Cam',
    oldImageUrl: 'https://www.mybeachcams.com/images/kahala-resort-cam.jpg',
    description: 'Live streaming webcam from the Kahala Resort.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Honolulu',
  },
  {
    title: 'Oahu Traffic Cams',
    webcamUrl: 'http://www2.honolulu.gov/honolulumyway/?trafficcam',
    oldImageUrl: 'https://www.mybeachcams.com/images/oahutrafficcams.jpg',
    description: 'See the latest Ouha traffic conditions with these webcams.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Honolulu',
  },
  // More Oahu Cams
  {
    title: 'Blue Hawaiian Helicopter Cam, Oahu',
    webcamUrl: 'http://www.bluehawaiian.com/oahu/webcam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/bluehawaiianhelicoptercam.jpg',
    description:
      'This live webcam is from the Honolulu International airport on Oahu.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: '',
  },
  {
    title: 'Turtle Bay Cam',
    webcamUrl: 'http://www.turtlebayresort.com/Webcam',
    oldImageUrl: 'https://www.mybeachcams.com/images/turtlebaycam.jpg',
    description:
      "This is a live streaming cam from the Turtle Bay in Kahuku on Oahu's North Shore.",
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: '',
  },
  {
    title: 'Moana Surfrider Cam',
    webcamUrl: 'http://www.seehawaiilive.com/oahu/waikiki-resorts',
    oldImageUrl: 'https://www.mybeachcams.com/images/moana-surfrider-cam.jpg',
    description: 'Streaming cam located in the heart of Waikiki.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: '',
  },
  {
    title: 'Hyatt Regency Waikiki Beach Resort & Spa',
    webcamUrl:
      'https://www.hyatt.com/gallery/hyattregencywaikiki/Hyatt-Regency-Waikiki-Beach-Live-Video.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/hyattregencywaikikibeachresortspa.jpg',
    description:
      'Live streaming webcam from the Hyatt Regency Waikiki Beach Resort.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: '',
  },
  // Oahu Surf Cams
  {
    title: 'South Shore Surf Cam',
    webcamUrl: 'http://www.surfline.com/surf-report/south-shore-hawaii_4761/',
    oldImageUrl: 'https://www.mybeachcams.com/images/southshoresurfcam.jpg',
    description:
      'This is a live streaming Surf Cam with a view of the Ala Moana surf on the South Shore of Oahu from Surfline with long pre-roll advertising.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Oahu Surf',
  },
  {
    title: 'Banzai Pipeline Surf Cam',
    webcamUrl: 'http://www.surfline.com/surf-report/pipeline-hawaii_4750/',
    oldImageUrl: 'https://www.mybeachcams.com/images/banzaipipelinesurfcam.jpg',
    description:
      "This Surf Cam has a view of the world famous surf reef break located off Ehukai Beach Park in Pupukea on Oahu's North Shore from Surfline with long pre-roll advertising.",
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Oahu Surf',
  },
  {
    title: 'Sunset Beach Surf Cam',
    webcamUrl: 'http://www.surfline.com/surf-report/sunset-hawaii_4746/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sunsetbeachsurfcam.jpg',
    description:
      "This Surf Cam features a view of Sunset Beach on Oahu's North Shore known for big wave surfing during the winter season from Surfline.",
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Oahu Surf',
  },
  {
    title: 'Waimea Bay Surf Cam',
    webcamUrl: 'http://www.surfline.com/surf-report/waimea-bay-hawaii_4755/',
    oldImageUrl: 'https://www.mybeachcams.com/images/waimeabaysurfcam.jpg',
    description:
      'This a Surf Cam at Waimea Bay, located east of Haleiwa on the North Shore of Oʻahu at the mouth of the Waimea River from Surfline with long pre-roll advertising.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Oahu Surf',
  },
  {
    title: 'Rocky Point Surf Cam',
    webcamUrl: 'http://www.surfline.com/surf-report/rocky-point-oahu_4748/',
    oldImageUrl: 'https://www.mybeachcams.com/images/rockypointsurfcam.jpg',
    description: 'Live streaming Surf Cam of the North Shore.',
    country: 'US',
    state: 'HI',
    area: 'Oahu',
    subArea: 'Oahu Surf',
  },
  // Maui
  // Kaanapali Beach Cams
  {
    title: 'Sheraton Maui Beach Cam',
    webcamUrl: 'http://www.seehawaiilive.com/maui/maui-resorts',
    oldImageUrl: 'https://www.mybeachcams.com/images/sheratonmauibeachcam.jpg',
    description:
      'This streaming web cam is hosted from the Sheraton Maui Resort &amp; Spa.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Kaanapali',
  },
  {
    title: 'Maui Kai Beach Cam',
    webcamUrl: 'http://www.mauikai.com/extras',
    oldImageUrl: 'https://www.mybeachcams.com/images/mauikaibeachcam.jpg',
    description: 'Live streaming webcam from Maui Kai at Kaanapali Beach.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Kaanapali',
  },
  {
    title: 'Westin Maui Resort Cam',
    webcamUrl: 'http://www.seehawaiilive.com/wm-cam.cfm',
    oldImageUrl: 'https://www.mybeachcams.com/images/westinmauiresortcam.jpg',
    description: 'This streaming webcam is from the Westin Maui Resort & Spa.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Kaanapali',
  },
  {
    title: 'Mahana Honokowai Condo Beach Cam',
    webcamUrl: 'http://67.53.48.2/CgiStart?page=Single&Language=0',
    oldImageUrl:
      'https://www.mybeachcams.com/images/mahanahonokowaicondobeachcam.jpg',
    description:
      'Live streaming webcam from the Aston Mahana Condos at Kaanapali.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Kaanapali',
  },
  // North Shore
  {
    title: 'Kanaha Beach Wind Cams',
    webcamUrl: 'http://www.mauiwindcam.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/kanahabeachwindcams.jpg',
    description:
      'Four streaming webcams from Kanaha Beach Park on the North Shore of Maui.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'North Shore',
  },
  {
    title: 'Oahu North Shore Pipeline Cam',
    webcamUrl: 'http://www.surfline.com/surf-report/pipeline-oahu_4750/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/oahu-north-shore-pipeline-cam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertisement.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'North Shore',
  },
  // Napili Beach
  {
    title: 'Live Napili Beach Webcam',
    webcamUrl: 'http://www.halenapili.com/photo-gallery/live-beach-cam.php',
    oldImageUrl:
      'https://www.mybeachcams.com/images/live-napili-beach-webam.jpg',
    description:
      'Napili Bay Maui webcam.  Streaming Flash based pan tilt zoom High quality.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Napili',
  },
  {
    title: 'Royal Kahana Maui Beach Cam',
    webcamUrl:
      'http://rkaoao.viewnetcam.com:1050/CgiStart?page=Single&Language=0',
    oldImageUrl:
      'https://www.mybeachcams.com/images/royalkahanamauibeachcam.jpg',
    description:
      'This small streaming webcam is coming live from the Outrigger Royal Kahana in Lahaina.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Napili',
  },
  // Lahaina
  {
    title: 'Lahaina Front Street Cam',
    webcamUrl: 'http://www.frontstreetcam.com/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/lahaina-front-street-cam.jpg',
    description: 'Live webcam from Front Street in Lahaina.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Lahaina',
  },
  // More Maui Cams
  {
    title: 'Blue Hawaiian Helicopter Cam Maui',
    webcamUrl: 'http://www.bluehawaiian.com/maui/webcam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/bluehawaiianhelicoptercam.jpg',
    description: 'Live webcam from the Kahului Airport in Maui.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: '',
  },
  {
    title: 'Mana Kai Beach Cam',
    webcamUrl: 'http://www.mauimanakai.com/webcam.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/manakaibeachcam.jpg',
    description: 'Still image updates every 30 seconds.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: '',
  },
  {
    title: 'Kamaole Beach Cam',
    webcamUrl: 'http://www.mauirealestate.net/video.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/kamaolebeachcam.jpg',
    description:
      'This is a streaming beach cam with a view of Charley Young Beach at Kamaole 1 Beach in Kihei.',
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: '',
  },
  // Maui Surf
  {
    title: "Ho'okipa Surf Cam",
    webcamUrl: 'http://www.mamasbeachcam.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/hookipasurfcam.jpg',
    description:
      "Ho'okipa surfcam located on Maui's North Shore on the road to Hana.",
    country: 'US',
    state: 'HI',
    area: 'Maui',
    subArea: 'Maui Surf',
  },
  // Big Island
  // Kona Beach Cams
  {
    title: 'Kona Beach Cam',
    webcamUrl: 'http://www.seehawaiilive.com/skea-cam.cfm',
    oldImageUrl: 'https://www.mybeachcams.com/images/konabeachcam.jpg',
    description:
      'This is a streaming pan tilt zoom webcam webcam from the Kona coastline.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: 'Kona',
  },
  {
    title: 'Kona Web Cam',
    webcamUrl: 'http://www.konaweb.com/index.shtml#WEBCAM',
    oldImageUrl: 'https://www.mybeachcams.com/images/konawebcam.jpg',
    description:
      'This still image is a view of Kailua Bay and is updated every 30 seconds.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: 'Kona',
  },
  // Waikoloa Coast
  {
    title: 'Waikoloa Cam',
    webcamUrl: 'http://www.hiltonwaikoloavillage.com/webcams',
    oldImageUrl: 'https://www.mybeachcams.com/images/waikoloa-cam.jpg',
    description:
      'Live streaming cam of Waikoloa Beach from the Hilton Waikoloa Village.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: 'Waikoloa Coast',
  },
  // More Hawaii Big Island Cams
  {
    title: 'Hilo Bay Tsunami Cam',
    webcamUrl: 'http://www.tsunami.org/hilobaycam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/hilobaytsunamicam.jpg',
    description:
      'This is live streaming webcam of Hilo Bay from the rooftop of the Pacific Tsunami Museum.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: '',
  },
  {
    title: 'Waikoloa Beach Cam',
    webcamUrl: 'http://www.hiltonwaikoloavillage.com/webcam/livewebcam.cfm',
    oldImageUrl: 'https://www.mybeachcams.com/images/waikoloabeachcam.jpg',
    description:
      'Two streaming webcams from the Hilton Waikoloa Village Hotel. The large webcam is Flash based and the other is a Java webcam.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: '',
  },
  {
    title: 'Blue Hawaiian Helicopter Cam, Big Island',
    webcamUrl: 'http://www.bluehawaiian.com/bigisland/webcam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/bluehawaiianhelicoptercam.jpg',
    description:
      'This live webcam is from the Wailkoloa Heliport on the Big Island looking Southeast towards Kona. This is a flash based streaming pan tilt zoom webcam.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: '',
  },
  // Observatory Cams on the Big Island of Hawaii
  {
    title: 'Mauna Loa Observatory Webcam',
    webcamUrl: 'http://www.esrl.noaa.gov/gmd/obop/mlo/livecam/livecam.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/maunaloaobservatorywebcam.jpg',
    description:
      'Several webcams from the summit of Mauna Loa.  These views are from the Mauna Loa Observatory (MLO) which is part of the National Oceanic and Atmospheric Administration (NOAA).',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: 'Observatory Cams',
  },
  {
    title: 'Mauna Kea Web Cams',
    webcamUrl: 'http://mkwc.ifa.hawaii.edu/current/cams/index.cgi?mode=multi',
    oldImageUrl: 'https://www.mybeachcams.com/images/maunakeawebcams.jpg',
    description:
      'Many webcams from the Gemini Observatory on Mauna Kea at an elevation 14,000 feet.  Lots to see if you are into observatories including numerous time lapse videos.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: 'Observatory Cams',
  },
  // Volcano Cams
  {
    title: 'Volcano Cams',
    webcamUrl: 'http://www.nps.gov/havo/photosmultimedia/webcams.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/volcano-cams.jpg',
    description:
      'National Park Service host several live webcams updated every 15 minutes or so.',
    country: 'US',
    state: 'HI',
    area: 'Big Island',
    subArea: 'Volcano Cams',
  },
  // CA
  // San Diego
  // San Diego Cams
  {
    title: 'San Diego Web Cam',
    webcamUrl: 'http://www.sundiegolive.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/san-diego-web-cam.jpg',
    description:
      'Live streaming Flash cam on San Diego Bay Cam from Coronado Island.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'San Diego',
  },
  {
    title: 'Hotel del Coronado Cam',
    webcamUrl: 'https://hoteldel.com/live-webcam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/hotel-del-coronado-cam.jpg',
    description: 'Large streaming and panning cam from the Hotel del Coronado.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'San Diego',
  },
  {
    title: 'Pacific Beach Coastline Cam',
    webcamUrl:
      'https://hdontap.com/index.php/video/stream/pacific-terrace-hotel',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pacific-beach-coastline-cam.jpg',
    description:
      'Large streaming and panning cam of a relaxing view of the Pacic Beach Coastline.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'San Diego',
  },
  // Del Mar Beach Cams
  {
    title: 'Del Mar Beach Cam',
    webcamUrl: 'https://hdontap.com/index.php/video/stream/del_mar_beach',
    oldImageUrl: 'https://www.mybeachcams.com/images/del-mar-beach-cam.jpg',
    description:
      'Live streaming pan tilt and zoom webcam located on 15th St. in Del Mar.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'Del Mar',
  },
  {
    title: 'Powerhouse Park Cam',
    webcamUrl: 'https://hdontap.com/index.php/video/stream/lauberge-del-mar',
    oldImageUrl: 'https://www.mybeachcams.com/images/powerhouse-park-cam.jpg',
    description: 'Streaming webcam looking at the Powerhouse Park in Del Mar.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'Del Mar',
  },
  {
    title: 'Del Mar Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/15th-to-18th-st-southern-california_4783/',
    oldImageUrl: 'https://www.mybeachcams.com/images/del-mar-surf-cam.jpg',
    description: 'Streaming surf cam with lots of advertising.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'Del Mar',
  },
  // Mission Bay Cams
  {
    title: 'Cataraman Cam',
    webcamUrl: 'http://www.catamaranresort.com/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/catamarancam.jpg',
    description:
      'Large live webcam at Mission Bay from the Catamaran Resort. Automated pan tilt and zoom.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'Mission',
  },
  {
    title: 'Bahia Resort Cam',
    webcamUrl: 'http://www.bahiahotel.com/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/bahiaresortcam.jpg',
    description:
      'This cam is streaming live from the Bahia Resort Hotel This  automated pan tilt and zoom webcam.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'Mission',
  },
  {
    title: 'Ocean Beach Webcam',
    webcamUrl: 'http://obhotel.com/webcam',
    oldImageUrl: 'https://www.mybeachcams.com/images/oceanbeachwebcam.jpg',
    description:
      'Live beach cam from Ocean Beach just south of Mission Bay. Streaming pan tilt and zoom webcam.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'Mission',
  },
  // More San Diego Cams
  {
    title: 'Kelp Cam',
    webcamUrl:
      'http://aquarium.ucsd.edu/Education/Learning_Resources/Kelp_Cam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/kelpcam.jpg',
    description:
      'See lots of fish on the live streaming Flash cam from the Birch Aquarium.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: '',
  },
  {
    title: 'Panda Cam',
    webcamUrl: 'http://www.sandiegozoo.org/pandacam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/pandacam.jpg',
    description: 'Live action from the San Diego Zoo. Streaming web cam.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: '',
  },
  {
    title: 'Polar Cam',
    webcamUrl: 'http://zoo.sandiegozoo.org/cams/polar-cam',
    oldImageUrl: 'https://www.mybeachcams.com/images/polar-cam.jpg',
    description:
      'Streaming live polar bears in their tundra habitat at the San Diego Zoo.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: '',
  },
  // San Diego Surf Cams
  {
    title: 'Scripps Pier Surf Cam',
    webcamUrl: 'http://sio.ucsd.edu/piercam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/scripps-pier-surf-cam.jpg',
    description:
      'Hosted by the Scripps Institution of Oceanography live Streaming HD Pier Cam.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'San Diego Surf Cams',
  },
  {
    title: 'Tamarack Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/tamarack-southern-california_4242/',
    oldImageUrl: 'https://www.mybeachcams.com/images/tamaracksurfcam.jpg',
    description: 'Streaming cam from Surfline with long pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'San Diego Surf Cams',
  },
  {
    title: 'Del Mar Surfline Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/del-mar-southern-california_4783/',
    oldImageUrl: 'https://www.mybeachcams.com/images/delmarsurflinecam.jpg',
    description: 'Streaming cam from Surfline with long pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'San Diego Surf Cams',
  },
  {
    title: 'Oceanside North Jetty Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/oceanside-north-jetty-southern-california_4238/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/oceansidenorthjettysurfcam.jpg',
    description: 'Streaming cam from Surfline with long pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'San Diego',
    subArea: 'San Diego Surf Cams',
  },
  // Los Angeles
  // Westside - Venice - Santa Monica - Pacific Palisades
  {
    title: 'Venice Beach Cam',
    webcamUrl: 'https://www.westland.net/beachcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/venicebeachcam.jpg',
    description:
      'Live streaming pan tilt and zoom Flash web cam from wild and crazy Venice Beach.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Westside - Venice - Santa Monica - Pacific Palisades',
  },
  {
    title: 'Topanga Streaming Cam',
    webcamUrl:
      'http://swellmagnet.com/surf-cams/topanga-beach-surf-cam-and-report/',
    oldImageUrl: 'https://www.mybeachcams.com/images/topanga-streaming-cam.jpg',
    description: 'Live straming Flash surf cam from Topanga.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Westside - Venice - Santa Monica - Pacific Palisades',
  },
  {
    title: 'Pacific Palisades Surf Cam',
    webcamUrl: 'https://hdontap.com/index.php/video/stream/sunset-surf-cam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pacific-palisades-surf-cam.jpg',
    description:
      'Streaming and panning cam from Sunset Beach in Pacific Palisades.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Westside - Venice - Santa Monica - Pacific Palisades',
  },
  {
    title: 'Santa Monica Pier Cam',
    webcamUrl: 'http://www.westland.net/piercam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/santamonicapiercam.jpg',
    description:
      'Live streaming pan tilt and zoom Flash web cam from the Santa Monica Pier where the Historic Route 66 ends at the Pacific Ocean.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Westside - Venice - Santa Monica - Pacific Palisades',
  },
  // South Bay Beach Cams
  {
    title: 'Hermosa Beach Cam',
    webcamUrl: 'http://www.hermosawave.net/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/hermosabeachcam.jpg',
    description: 'Large HD still image updated every 10 seconds.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'South Bay',
  },
  {
    title: 'Long Beach Harbor Cam',
    webcamUrl: 'http://abc7.com/weather/cams/long-beach/',
    oldImageUrl: 'https://www.mybeachcams.com/images/longbeachharborcam.jpg',
    description: 'Still image updated every few minutes from ABC 7 News.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'South Bay',
  },
  {
    title: 'Long Beach Marina Cam',
    webcamUrl:
      'https://hdontap.com/index.php/video/stream/long-beach-harbor-live',
    oldImageUrl: 'https://www.mybeachcams.com/images/long-beach-marina-cam.jpg',
    description: 'Rotating streaming cam from Long Beach Marina.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'South Bay',
  },
  // Catalina Island Cams
  {
    title: 'Catalina Island Bay Cam',
    webcamUrl: 'http://www.catalinas.net/livecam1/',
    oldImageUrl: 'https://www.mybeachcams.com/images/catalinaislandbaycam.jpg',
    description: 'Steaming live web cam. A view of Avalon bay and the Casino.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Catalina Island',
  },
  {
    title: 'Catalina Island Casino Cam',
    webcamUrl:
      'https://www.visitcatalinaisland.com/island-info/media/catalina-island-casino-cam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/catalina-island-casino-cam.jpg',
    description: 'Panoramic still view from the Catalina Island Casino.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Catalina Island',
  },
  {
    title: 'Catalina Express Cam',
    webcamUrl: 'https://www.catalinaexpress.com/explore-catalina/webcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/catalina-express-cam.jpg',
    description: 'Streaming Dock view of the Catalina Express ferry.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Catalina Island',
  },
  {
    title: 'Avalon Bay Cam',
    webcamUrl: 'https://www.catalinachamber.com/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/avalon-bay-cam.jpg',
    description: 'Large still image of Avalon Bay updated every five minutes.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Catalina Island',
  },
  // Orange County Beach Cams
  {
    title: 'Huntington Beach Cam',
    webcamUrl: 'http://hbcams.com/live/beach-north.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/humtington-beach-cam.jpg',
    description: 'Live streaming Flash cam from huntington Beach.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Orange County',
  },
  {
    title: 'Balboa Ferry Cam',
    webcamUrl: 'http://talesofbalboa.com/webcams/balboabay.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/balboaferrycam.jpg',
    description:
      'Web cam of the Ferry at the Balboa Peninsula. Updated every 10 seconds.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Orange County',
  },
  // Laguna Beach Cams
  {
    title: 'Laguna Beach Cam',
    webcamUrl: 'http://www.earthcam.com/usa/california/laguna/',
    oldImageUrl: 'https://www.mybeachcams.com/images/lagunabeachcam.jpg',
    description:
      'Earthcam streaming Flash web cam with pre-roll advertising. See the beautiful homes and the beautiful people at Laguna Beach.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Laguna Beach',
  },
  {
    title: 'ABC Laguna Beach Cam',
    webcamUrl: 'http://abc7.com/weather/cams/laguna-beach/',
    oldImageUrl: 'https://www.mybeachcams.com/images/abclagunabeachcam.jpg',
    description: 'ABC Laguna Beach Cam still image updated from ABC 7 News.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Laguna Beach',
  },
  // Los Angeles Area Surf Cams
  {
    title: 'County Line Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/county-line-southern-california_4203/',
    oldImageUrl: 'https://www.mybeachcams.com/images/countylinesurfcam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Los Angeles',
  },
  {
    title: 'Zuma Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/zuma-southern-california_4949/',
    oldImageUrl: 'https://www.mybeachcams.com/images/zumasurfcam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Los Angeles',
  },
  {
    title: 'Malibu Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/malibu-southern-california_4209/',
    oldImageUrl: 'https://www.mybeachcams.com/images/malibusurfcam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Los Angeles',
  },
  {
    title: 'Topanga Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/topanga-southern-california_4210/',
    oldImageUrl: 'https://www.mybeachcams.com/images/topangasurfcam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Los Angeles',
  },
  {
    title: 'El Porto Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/el-porto-southern-california_4900',
    oldImageUrl: 'https://www.mybeachcams.com/images/elportosurfcam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Los Angeles',
  },
  {
    title: 'Manhattan Beach Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/manhattan-beach-southern-california_4901/',
    oldImageUrl: 'https://www.mybeachcams.com/images/manhattanbeachsurfcam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Los Angeles',
  },
  {
    title: "Torrance Beach - Haggerty's Surf Cam",
    webcamUrl:
      'http://www.surfline.com/surf-report/torrance-beach-haggertys-southern-california_4910/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/torrancebeachhaggertyscurfcam.jpg',
    description:
      'Streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Los Angeles',
    subArea: 'Los Angeles',
  },
  // Central Coast
  // Monterey Bay Cams
  {
    title: 'Monterey Bay Web Cam',
    webcamUrl: 'http://www.montereybayaquarium.org/efc/efc_lotb/webcam.aspx',
    oldImageUrl: 'https://www.mybeachcams.com/images/montereybaywebcam.jpg',
    description: 'This camera is from the Monterey Bay Aquarium.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Monterey Bay',
  },
  {
    title: 'Big Sur Cam',
    webcamUrl: 'https://www.nepenthe.com/live-weather-cam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/bigsurcam.jpg',
    description:
      'Webcam from the Nepenthe Restaurant over looking the coast.  Still image updating every minute.  Big Sur is famous for its abrupt cliffs next to the ocean.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Monterey Bay',
  },
  {
    title: 'Pebble Beach Cam',
    webcamUrl:
      'http://www.pebblebeach.com/golf/pebble-beach-golf-links/live-golf-cams',
    oldImageUrl: 'https://www.mybeachcams.com/images/pebblebeachcam.jpg',
    description:
      'Five live streaming Flash webcams at the world famous Pebble Beach Golf Course.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Monterey Bay',
  },
  {
    title: 'Santa Cruz Wharf Cam',
    webcamUrl: 'http://www.walknet.net/mylife.shtml',
    oldImageUrl: 'https://www.mybeachcams.com/images/santacruzwharfcam.jpg',
    description:
      'This is a view from West Cliff Drive in Santa Cruz looking at The Wharf.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Monterey Bay',
  },
  // San Luis Obispo Cams
  {
    title: 'Cayucos Pier and Surf Cam',
    webcamUrl: 'http://www.cayucosshorelineinn.com/cayucos-beach-cam.php',
    oldImageUrl: 'https://www.mybeachcams.com/images/cayucospierandsurfcam.jpg',
    description: 'Live streaming webcam from shoreline Inn in Cayucos.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'San Luis Obispo',
  },
  {
    title: 'Pismo Beach on the Pier Cam',
    webcamUrl: 'http://www.classiccalifornia.com/cam.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pismobeachonthepiercam.jpg',
    description: 'Weather Cam on the Pier - Pismo Beach California.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'San Luis Obispo',
  },
  {
    title: 'Pismo Beach Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/pismo-beach-pier-central-california_5065/',
    oldImageUrl: 'https://www.mybeachcams.com/images/pismobeachsurfcam.jpg',
    description: 'Surf Cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'San Luis Obispo',
  },
  // Santa Barbara Beach Cams
  {
    title: 'Santa Barbara Yacht Club',
    webcamUrl: 'http://www.livefrom.com/SBYacht/index.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/santa-barbara-yacht-club.jpg',
    description: 'Live streaming cam from the Santa Barbara Yacht Club.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Santa Barbara',
  },
  {
    title: 'Santa Barbara Harbor Cam',
    webcamUrl: 'http://www.livefrom.com/index.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/santa-barbara-harbor-cam.jpg',
    description: 'Live streaming cam from the Santa Barbara Harbor.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Santa Barbara',
  },
  {
    title: 'Campus Point Surfcam',
    webcamUrl: 'http://www.ucen.ucsb.edu/surfcam',
    oldImageUrl: 'https://www.mybeachcams.com/images/campus-point-surfcam.jpg',
    description:
      'Live streaming cam from the University of California Santa Barbara Campus Point.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Santa Barbara',
  },
  {
    title: 'Leadbetter Beach Surfcam',
    webcamUrl: 'http://www.shorelinebeachcafe.com/leadbetter-beach-surf-cam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/leadbetter-beach-surfcam.jpg',
    description: 'Streaming surfcam from Leadbetter Beach Santa Barbara.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Santa Barbara',
  },
  // Central Coast Surf Cams
  {
    title: 'Santa Cruz Surf Cam',
    webcamUrl: 'http://www.surfershot.com/pleasure-point-surfcam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pleasure-point-surfcam.jpg',
    description: 'Live steaming surf cam.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Central Coast Surf Cams',
  },
  {
    title: 'Morro Bay Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/morro-bay-central-california_4193/',
    oldImageUrl: 'https://www.mybeachcams.com/images/morrobaysurfcam.jpg',
    description:
      'Streaming Flash surf Cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'Central Coast',
    subArea: 'Central Coast Surf Cams',
  },
  // San Francisco
  // San Francisco Bay
  {
    title: 'South End Rowing Club Cam',
    webcamUrl: 'http://www.earthcam.com/cams/california/sanfrancisco/',
    oldImageUrl: 'https://www.mybeachcams.com/images/southendrowingclubcam.jpg',
    description:
      "Streaming Flash Earhtcam from San Francisco Bay's South End Rowing Club with a pre-roll advertising.",
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: "Sam's Cafe Cam",
    webcamUrl: 'http://samscafe.com/cam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/sams-cafe-cam.jpg',
    description:
      "Slowly streaming cam from Sam's Anchor Cafe located in Marin County.",
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Golden Gate Area Park Webcams',
    webcamUrl: 'http://www.parksconservancy.org/visit/web-cams.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/golden-gate-area-park-webcams.jpg',
    description:
      'Still images of Mt. Tamalpais summit Point Reyes Fort Funston and Muir Beach.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Brisbane Marina Webcam',
    webcamUrl: 'http://www.ci.brisbane.ca.us/departments/marina/webcam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/brisbane-marina-webcam.jpg',
    description:
      'Streaming webcam of Brisbane Marina sponsored by the City of Brisbane.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'San Francisco Panorama',
    webcamUrl:
      'http://www.earthcam.com/usa/california/sanfrancisco/index.php?content=panorama',
    oldImageUrl:
      'https://www.mybeachcams.com/images/san-francisco-panorama.jpg',
    description:
      'A panoramic view of San Francisco. Choose from a variety of landmarks or pan across the panorama.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Lawrence Hall of Science Cam',
    webcamUrl:
      'http://static.lawrencehallofscience.org/scienceview/scienceview.berkeley.edu/html/webcamUrl: view/index.php',
    oldImageUrl:
      'https://www.mybeachcams.com/images/lawrence-hall-of-science-cam.jpg',
    description:
      'Enjoy the view from the Lawrence Hall of Science overlooking the San Francisco Bay Area.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Pier 39 Sea Lion Cam',
    webcamUrl: 'http://www.pier39marina.com/the-sealions-at-pier39/',
    oldImageUrl: 'https://www.mybeachcams.com/images/pier-39-sea-lion-cam.jpg',
    description:
      'A panning streaming webcam of Pier 39 Marina with its Sea Lions.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Sausalito Cam',
    webcamUrl: 'http://rntl.net/sausalitocam.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/sausalito-cam.jpg',
    description: 'Two still cams from Sausalito Yacht Club.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Wired Pier Cam',
    webcamUrl: 'https://www.exploratorium.edu/environmental-field-station',
    oldImageUrl: 'https://www.mybeachcams.com/images/wired-pier-cam.jpg',
    description:
      'Still cam updated every few seconds from the Wierd Piet an environmental field station.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Bay Bridge Cam',
    webcamUrl: 'http://abc7news.com/weather/cams/',
    oldImageUrl: 'https://www.mybeachcams.com/images/bay-bridge-cam.jpg',
    description: 'Still cam of the Bay Bridge from ABC channel 7.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'East Beach Webcam',
    webcamUrl: 'http://goldengatebridge75.org/news/webcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/east-beach-webcam.jpg',
    description:
      'Small streaming pan tilt and zoom cam of the Golden Gate Bridge.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'Muir Beach Cam',
    webcamUrl: 'http://www.sigward.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/muirbeachcam.jpg',
    description: 'Muir Beach in Marin. Still updated from time to time.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  {
    title: 'CBS San Francisco Traffic Cams',
    webcamUrl: 'http://sanfrancisco.cbslocal.com/traffic-webcams/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/cbssanfranciscotrafficcams.jpg',
    description:
      'From CBS San Francisco over 30 traffic cams. Still images updated every five minutes.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Bay',
  },
  // Mendocino Beach Cams
  {
    title: 'Agate Cove Inn Cam',
    webcamUrl: 'http://www.agatecove.com/webcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/agatecoveinncam.jpg',
    description:
      'Pacific Ocean in Mendocino. A new picture is taken every 10 minutes.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'Mendocino',
  },
  {
    title: 'Headlands Cam',
    webcamUrl:
      'http://northcoastaviation.com/shelter_cove/shelter_cove_lost_coast_inn_headlands.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/headlands-cam.jpg',
    description:
      'Still image of Shelter Cove along the scenic Mendocino coast. Updates every minute.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'Mendocino',
  },
  {
    title: 'Lighthouse Cam',
    webcamUrl: 'http://northcoastaviation.com/pt_arena/point_arena_west.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/lighthouse-cam.jpg',
    description:
      'Point Arena Lighthouse Mendocino County. Still image updates every 30 seconds.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'Mendocino',
  },
  // San Francisco Surf Cams
  {
    title: 'Ocean Beach Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/north-ocean-beach-central-california_4127/',
    oldImageUrl: 'https://www.mybeachcams.com/images/oceanbeachsurfcam.jpg',
    description:
      'Live streaming Flash surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Surf Cams',
  },
  {
    title: 'South Ocean Beach',
    webcamUrl:
      'http://www.surfline.com/surf-report/south-ocean-beach-central-california_4128/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/southoceanbeachsurfcam.jpg',
    description:
      'Live streaming surf cam from Surfline with pre-roll advertising.',
    country: 'US',
    state: 'CA',
    area: 'San Francisco',
    subArea: 'San Francisco Surf Cams',
  },
  // FL
  // Panhandle
  // Panama City
  {
    title: 'Seahaven Beach Cam',
    webcamUrl: 'http://seahavenbeach.com/panama-city-beach-web-cam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/seahaven-beach-cam.jpg',
    description:
      'Live streaming Flash cam from Seahaven Beach Resorts in Panama City.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Panama City',
  },
  {
    title: 'Panama City Sandpiper Beach Cam',
    webcamUrl:
      'http://www.sandpiperbeacon.com/panama-city-beach/webcam/surf-cam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/panama-city-sandpiper-beach-cam.jpg',
    description:
      'Panama City Sandpiper Beacon Resort streaming Flash Beach Cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Panama City',
  },
  {
    title: 'Panama City Sandpiper West Beach Cam',
    webcamUrl:
      'http://www.sandpiperbeacon.com/panama-city-beach/webcam/sunset/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/panama-city-sandpiper-west-beach-cam.jpg',
    description:
      'Panama City Sandpiper Beacon Resort West streaming Flash Beach Cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Panama City',
  },
  {
    title: "Schooners' Panama Beach Cam",
    webcamUrl: 'http://www.schooners.com/multimedia/beachcam.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/schooners-panama-beach-cam.jpg',
    description: 'Streaming beach cam from Schooners on Panama City Beach.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Panama City',
  },
  {
    title: "Schooners' Panama Sunset Cam",
    webcamUrl: 'http://www.schooners.com/multimedia/sunsetcam.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/schooners-panama-sunset-cam.jpg',
    description: 'Streaming sunset cam from Schooners on Panama City Beach.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Panama City',
  },
  {
    title: 'Panama City Beach Cam',
    webcamUrl: 'http://www.beachview.com/Beach_Cams/Panama_City_Beach.aspx',
    oldImageUrl: 'https://www.mybeachcams.com/images/panama-city-beach-cam.jpg',
    description:
      'Still image hit reload to see new image. Updates ever minute.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Panama City',
  },
  {
    title: 'St. George Island Streaming Cam',
    webcamUrl: 'http://www.blueparrotsgi.com/multimedia/livecam.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/st-george-island-streaming-cam.jpg',
    description:
      'St. George Island Live streaming Flash Cam from Blue Parrot Oceanfront Cafe.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Panama City',
  },
  // St. Teresa
  {
    title: 'Alligator Point Beach Cam',
    webcamUrl: 'http://www.beachview.com/Beach_Cams/Alligator_Point.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/alligator-point-beach-cam.jpg',
    description:
      'Still image hit reload to see new image. Updates ever minute.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'St. Teresa',
  },
  // Pensacola
  {
    title: 'Pensacola Beach Webcam East',
    webcamUrl:
      'http://www.visitpensacola.com/content/webcam/pensacola-beach-east',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pensacola-beach-webcam-east.jpg',
    description: 'Panning streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Pensacola',
  },
  {
    title: 'Pensacola Beach Webcam West',
    webcamUrl:
      'http://www.visitpensacola.com/content/webcam/pensacola-beach-west',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pensacola-beach-webcam-west.jpg',
    description: 'Streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Pensacola',
  },
  {
    title: 'Pensacola Beach Webcam South',
    webcamUrl:
      'http://www.visitpensacola.com/content/pensacola-beach-webcam-south-view',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pensacola-beach-webcam-south.jpg',
    description: 'Streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Pensacola',
  },
  {
    title: 'Pensacola Beach Cam and Surf Report',
    webcamUrl: 'http://pensacolasurf.com/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/pensacola-beach-cam-and-surf-report.jpg',
    description: 'Live streaming pan tilt zoom Flash web cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Pensacola',
  },
  // Gulf Breeze
  {
    title: 'Gulf Breeze Web Cam',
    webcamUrl: 'http://www.livebeachnetwork.com/Gulf_Breeze_FL.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/gulf-breeze-web-cam.jpg',
    description: 'Live streaming beach cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Gulf Breeze',
  },
  // Perdido Key
  {
    title: 'Perdido Key Beach Cam',
    webcamUrl:
      'https://www.nps.gov/media/webcam/view.htm?id=81B4662E-1DD8-B71B-0B01D8503D5C98F4',
    oldImageUrl: 'https://www.mybeachcams.com/images/perdido-key-beach-cam.jpg',
    description:
      'Still images updated every 15 minutes from the National Park Service.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Perdido Key',
  },
  // Okaloosa Island
  {
    title: 'Okaloosa Island Web Cam',
    webcamUrl: 'http://www.breakersfwb.com/site/beach-cam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/okaloosa-island-web-cam.jpg',
    description:
      'Streaming live cam - you will need to scroll down the page to see the cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Okaloosa Island',
  },
  // Navarre Beach
  {
    title: 'Navarre Beach HD Zoom Cam',
    webcamUrl: 'http://www.navarrebeachlife.com/forums/page.php?p=zoom',
    oldImageUrl:
      'https://www.mybeachcams.com/images/navarre-beach-hd-zoom-cam.jpg',
    description: 'Live streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Navarre Beach',
  },
  {
    title: 'Navarre Beach Live Skyline Cam',
    webcamUrl: 'http://www.navarrebeachlife.com/forums/page.php?p=skyline',
    oldImageUrl:
      'https://www.mybeachcams.com/images/navarre-beach-live-skyline-cam.jpg',
    description: 'Web cam from Navarre Beach.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Navarre Beach',
  },
  // Destin Beach
  {
    title: 'Destin Beach Cam',
    webcamUrl:
      'http://www.oceanreefresorts.com/beachcam/destin-florida-beach-cam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/destin-streaming-beach-cam.jpg',
    description: 'Large streaming Flash webcam.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Destin Beach',
  },
  {
    title: 'Destin Beach Still Cam',
    webcamUrl: 'http://www.destincam.com',
    oldImageUrl: 'https://www.mybeachcams.com/images/destin-beach-cam.jpg',
    description: 'Still image updated every 10 minutes.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Destin Beach',
  },
  // Sandestin Beach
  {
    title: 'Hilton Sandestin Beach Cam',
    webcamUrl: 'http://www.hiltonsandestinbeach.com/destin-webcam',
    oldImageUrl: 'https://www.mybeachcams.com/images/sandestin-beach-cam.jpg',
    description: 'Streaming live Flash web cam. Sounds of the beach too.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Sandestin Beach',
  },
  // Cape San Blas
  {
    title: 'Cape San Blas Web Cam',
    webcamUrl:
      'http://www.aquaessence.com/index.cfm/m/54/Cape%20San%20Blas%20Webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/cape-san-blas-web-cam.jpg',
    description: 'Straming live video.',
    country: 'US',
    state: 'FL',
    area: 'Panhandle',
    subArea: 'Cape San Blas',
  },
  // Northeast
  // St. Augustine
  {
    title: 'St. Augustine South Beach Grill Cam',
    webcamUrl: 'http://www.southbeachgrill.net/live-beach-camera',
    oldImageUrl:
      'https://www.mybeachcams.com/images/st-augustine-south-beach-grill-cam.jpg',
    description: 'Live Streaming surf cam from the South Beach Grill.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'St. Augustine',
  },
  {
    title: 'St. Augustine Beach Stills',
    webcamUrl: 'http://www.surf-station.com',
    oldImageUrl:
      'https://www.mybeachcams.com/images/st-augustine-beach-stills.jpg',
    description:
      'Surf Station Surf Shop Daily Stills a few times a day with lots of advertising.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'St. Augustine',
  },
  {
    title: 'St. Augustine Surf Cam',
    webcamUrl: 'http://blueskysurfshop.com/report',
    oldImageUrl: 'https://www.mybeachcams.com/images/st-augustine-surf-cam.jpg',
    description:
      'Blue Sky Surf Shop Daily Stills updated a few times a day plus surf report.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'St. Augustine',
  },
  // Jacksonville Beach
  {
    title: 'Jacksonville Beach Pier Surf Cam',
    webcamUrl:
      'http://www.surfguru.com/north-florida-surf-reports/jacksonville-beach-pier-surf-report',
    oldImageUrl:
      'https://www.mybeachcams.com/images/jacksonville-beach-pier-surf-cam.jpg',
    description:
      'Surf Guru.com Live Streaming Flash Cam. Long pre-roll advertisement.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  {
    title: 'St. Augustine Surf Cam 2',
    webcamUrl: 'http://www.thepitsurfshop.com/surf-report',
    oldImageUrl: 'https://www.mybeachcams.com/images/st-sugustine-surf-cam.jpg',
    description: 'Live streaming Flash surf cam.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  {
    title: 'Jacksonville Surf Cam (South)',
    webcamUrl: 'http://voidlive.com/jacksonville-beach-surf-cam-south/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/jacksonville_beach_surf_cam_south.jpg',
    description: 'Streaming Flash surf cam.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  {
    title: 'Jacksonville Beach Pier Cam',
    webcamUrl: 'http://www.jaxpiercam.com/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/jacksonville-beach-pier-cam.jpg',
    description: 'Streaming Flash surf cam with long pre-roll advertisement.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  {
    title: 'Jacksonville Beach Surfline Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/jacksonville-beach-pier-florida_5315/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/jacksonville-beach-surfline-cam.jpg',
    description:
      'Streaming Flash surf cam with long pre-roll advertisement from Surfline.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  {
    title: 'Jacksonville Beach Fluidgroove Surf Cam',
    webcamUrl: 'http://www.fluidgroove.net/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/jacksonville-beach-fluidgroove-surf-cam.jpg',
    description: 'Streaming live Flash surf cam.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  // Fernandina Beach
  {
    title: 'Fernandina Beach Cam',
    webcamUrl: 'http://hamptoninnandsuitesameliaisland.com/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/amelia-island-beach-cam.jpg',
    description:
      'Streaming cam (scroll down the page). From Amelia Island at the Fernandina Harbor Marina Hotel.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  {
    title: 'Amelia Island Surf Cam',
    webcamUrl: 'http://www.ameliaisland.com/web-cam-5/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/amelia-island-surf-cam.jpg',
    description: 'Large live streaming rooftop cam. Requires Java plug-in.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  {
    title: 'Amelia Island Streaming Beach Cam',
    webcamUrl: 'http://www.ameliaisland.com/web-cam-6/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/amelia-island-streaming-beach-cam.jpg',
    description: 'Streaming beach cam. Requires Java plug-in.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Jacksonville Beach',
  },
  // Ponte Vedra Beach
  {
    title: 'Ponte Vedra Inn Beach Cam',
    webcamUrl:
      'http://www.visitflorida.com/webcams/w.187/ponte-vedra-inn-and-club-beach-cam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/ponte-vedra-inn-beach-cam.jpg',
    description: 'Streaming webcam.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Ponte Vedra Beach',
  },
  // Flagler Beach
  {
    title: 'Flagler Beach Cam',
    webcamUrl: 'http://flaglersurf.com/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/flagler-beach-cam.jpg',
    description:
      'Flaglersurf.com live streaming beach web cam and surf report.',
    country: 'US',
    state: 'FL',
    area: 'Northeast',
    subArea: 'Flagler Beach',
  },
  // East Central
  // Daytona Beach
  {
    title: 'Ocean Deck Beachcam',
    webcamUrl: 'http://webcam.oceandeck.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/image-not-found.jpg',
    description: 'Live streaming cam from Ocean Deck Restaurant & Beach Club.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Daytona Beach',
  },
  {
    title: 'Daytona Dunlawton Beach Cam',
    webcamUrl: 'http://www.volusia.org/news/daytona.stml',
    oldImageUrl:
      'https://www.mybeachcams.com/images/daytona-dunlawton-beach-cam.jpg',
    description: 'Live streaming beach Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Daytona Beach',
  },
  {
    title: 'Ponce Inlet Surf Cam',
    webcamUrl: 'http://www.progressivesports.com/web_cam.php',
    oldImageUrl: 'https://www.mybeachcams.com/images/ponce-inlet-surf-cam.jpg',
    description:
      'Streaming Flash surf cam from Ponce Inlet Sandy Point at Daytona Beach.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Daytona Beach',
  },
  {
    title: 'Daytona Beach Sunglow Pier North Cam',
    webcamUrl: 'http://www.sunglowpierlive.com',
    oldImageUrl:
      'https://www.mybeachcams.com/images/daytona-beach-sunglow-pier-north-cam.jpg',
    description: 'Sunglow Pier North Streaming Flash Surf.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Daytona Beach',
  },
  {
    title: 'Daytona Beach Sunglow Pier South Cam',
    webcamUrl: 'http://www.sunglowpierlive.com/sunglowpiersouth.php',
    oldImageUrl:
      'https://www.mybeachcams.com/images/daytona-beach-sunglow-pier-south-cam.jpg',
    description: 'Streaming Flash surf cam from Sunglow Pier South.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Daytona Beach',
  },
  {
    title: 'Daytona Ocean Deck Beach Cam',
    webcamUrl: 'http://www.oceandeck.com/daytona/hit-the-deck/live-webcam.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/daytona-ocean-deck-beach-cam.jpg',
    description: 'Streaming Cam. Requires Java plug-in.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Daytona Beach',
  },
  // New Smyrna Beach
  {
    title: 'New Smyrna Beach Cam',
    webcamUrl: 'http://www.volusia.org/news/new-smyrna.stml',
    oldImageUrl: 'https://www.mybeachcams.com/images/new-smyrna-beach-cam.jpg',
    description: 'Streaming Flash beach cam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'New Smyrna Beach',
  },
  {
    title: 'New Smyrna Beach Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/new-smyrna-beach-florida_4420/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/new-smyrna-beach-surf-cam.jpg',
    description:
      'A short (must be reloaded) view from Surfline Flash streaming webcam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'New Smyrna Beach',
  },
  {
    title: 'New Smyrna Beach Ocean View Cam',
    webcamUrl: 'http://www.oceanviewcam.com/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/new-smyrna-beach-ocean-view-cam.jpg',
    description:
      'Poolside ocean view cam with still image updates every 60 seconds.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'New Smyrna Beach',
  },
  {
    title: 'New Smyrna Beach Surf Remote Cam',
    webcamUrl: 'http://www.surfguru.com/florida-surf-reports/new-smyrna-beach',
    oldImageUrl:
      'https://www.mybeachcams.com/images/new-smyrna-beach-surf-remote-cam.jpg',
    description:
      'Remote control streaming Flash surf cam from SurfGuru with advertisement pre-roll.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'New Smyrna Beach',
  },
  // Cocoa Beach
  {
    title: 'Cocoa Beach Pier South Surf Cam',
    webcamUrl: 'http://www.gosurfsportswear.com/piercam/pier.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/cocoa-beach-pier-south-surf-cam.jpg',
    description: 'Live streaming Flash surf cam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Cocoa Beach',
  },
  {
    title: 'Cocoa Beach Pier South Beach Cam',
    webcamUrl:
      'http://www.surfguru.com/florida-surf-reports/cocoa-beach-pier.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/cocoa-beach-pier-south-beach-cam.jpg',
    description:
      'Streaming Flash surf cam with pre-roll advertising from Surf Guru.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Cocoa Beach',
  },
  {
    title: 'Cocoa Beach Still Cam',
    webcamUrl: 'http://www.16streets.com',
    oldImageUrl: 'https://www.mybeachcams.com/images/cocoa-beach-still-cam.jpg',
    description: 'Daily stills of the surf from 16streets.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Cocoa Beach',
  },
  {
    title: '2nd Light Streaming Surf Cam',
    webcamUrl: 'http://www.2ndlight.com/sat_cam.cfm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/2nd-light-streaming-surf-cam.jpg',
    description: 'Cocoa Beach Streaming Flash surf cam from 2ndlight.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Cocoa Beach',
  },
  {
    title: 'Cocoa Beach Oceanfront Surf Cam',
    webcamUrl: 'http://www.cocoabeachdoubletree.com/webcam.php',
    oldImageUrl:
      'https://www.mybeachcams.com/images/cocoa-beach-oceanfront-surf-cam.jpg',
    description:
      'Double Tree by Hilton Cocoa Beach Oceanfront streaming Flash surf cam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Cocoa Beach',
  },
  // Sebastian Inlet
  {
    title: 'Sebastian Inlet Webcam',
    webcamUrl: 'http://www.sebastianinletcam.com/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/sebastian-inlet-webcam.jpg',
    description: 'Panorama  Research cam stills updated throughout the day.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Lahaina',
  },
  {
    title: 'Sebastian Inlet Surf Cam',
    webcamUrl:
      'http://www.surfguru.com/florida-surf-reports/sebastian-inlet.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/sebastian-inlet-surf-cam.jpg',
    description:
      'Streaming Flash surf cam with pre-roll advertising from Surf Guru.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Lahaina',
  },
  {
    title: 'Sebastian Inlet Surf Jetty Cam',
    webcamUrl:
      'http://www.surfguru.com/florida-surf-reports/sebastian-inlet-jetty.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/sebastian-inlet-jetty-surf-cam.jpg',
    description:
      'Streaming Flash surf cam with pre-roll advertising from Surf Guru.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Lahaina',
  },
  {
    title: 'Sebastian Inlet Cam',
    webcamUrl:
      'http://www.surfline.com/surfline/livecams/report.cfm?alias=sebastianinletcam',
    oldImageUrl: 'https://www.mybeachcams.com/images/sebastian-inlet-cam.jpg',
    description:
      'Short streaming Flash surf cam with pre-roll advertising from Surfline.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Lahaina',
  },
  // Vero Beach
  {
    title: 'Vero Beach Cam',
    webcamUrl: 'http://www.verobeachcam.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/vero-beach-cam.jpg',
    description: 'Slow streaming webcam from Vero Beach.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Vero Beach',
  },
  {
    title: 'Vero Beach Surf Cam',
    webcamUrl: 'http://villagespires.com/surf_cam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/vero-beach-surf-cam.jpg',
    description: 'Large live streaming surf cam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Vero Beach',
  },
  // Cape Canaveral
  {
    title: 'TwoPalms Cape Canaveral Cam',
    webcamUrl: 'http://www.twopalms.com/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/twopalms-cape-canaveral-cam.jpg',
    description: 'Very large live streaming beach cam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Cape Canaveral',
  },
  {
    title: 'Port Canaveral Webcam',
    webcamUrl: 'http://portcanaveralwebcam.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/port-canaveral-webcam.jpg',
    description: 'Large streaming port cam from Cape Canaveral.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Cape Canaveral',
  },
  // Jetty Park
  {
    title: 'Jetty Park Surf Cam',
    webcamUrl:
      'http://www.surfguru.com/central-florida-surf-reports/jetty-park-surf-report',
    oldImageUrl: 'https://www.mybeachcams.com/images/jetty-park-surf-cam.jpg',
    description:
      'Streaming Flash surf cam from Surf Guru.com. Long pre-roll advertisement.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Jetty Park',
  },
  // Ormond Beach
  {
    title: 'Ormond Beach Pier Surf Cam',
    webcamUrl: 'http://castillodelsolhotel.com/cam.cfm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/ormond-beach-pier-surf-cam.jpg',
    description: 'Castillo Del Sol Hotel Live Streaming Flash Beach Cam.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Lahaina',
  },
  // Spanish House
  {
    title: 'Melbourne Beach Surf Cam',
    webcamUrl:
      'http://www.surfguru.com/florida-surf-reports/melbourne-beach.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/melbourne-beach-surf-cam.jpg',
    description:
      'Streaming Flash surf cam with pre-roll advertising from Surf Guru.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Spanish House',
  },
  {
    title: 'Spanish House Surf Cam',
    webcamUrl:
      'http://www.surfguru.com/florida-surf-reports/spanish-house.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/spanish-house-surf-cam.jpg',
    description:
      'Melbourne Beach Spanish House Surf Cam. Streaming Flash surf cam with pre-roll advertising from Surf Guru.com.',
    country: 'US',
    state: 'FL',
    area: 'East Central',
    subArea: 'Spanish House',
  },
  // Miami
  // Miami Beach
  {
    title: 'Miami Cams from Earthcam',
    webcamUrl: 'http://www.earthcam.com/usa/florida/miamibeach/',
    oldImageUrl: 'https://www.mybeachcams.com/images/miami-earthcams.jpg',
    description:
      'Multiple large streaming Flash cams with long pre-roll advertizement.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'Miami Beach',
  },
  {
    title: 'Miami Cams',
    webcamUrl: 'http://seemiamilive.com',
    oldImageUrl: 'https://www.mybeachcams.com/images/miami-cams.jpg',
    description:
      'A collection of streaming webcams around Miami from SeeMiamiLive.com.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'Miami Beach',
  },
  {
    title: 'Port of Miami Webcam',
    webcamUrl: 'http://www.portmiamiwebcam.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/port-of-miami-webcam.jpg',
    description: 'Large streaming Pan Tilt Zoom Flash webcam.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'Miami Beach',
  },
  {
    title: 'Biscayne Bay Miami Cam',
    webcamUrl: 'http://biscaynebaycam.com/Web_Cam.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/biscayne-may-miami-cam.jpg',
    description: 'Streaming cam.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'Miami Beach',
  },
  {
    title: 'Biscayne Bay Webcam',
    webcamUrl:
      'http://www.miamiandbeaches.com/plan-your-trip/see-miami-webcams',
    oldImageUrl: 'https://www.mybeachcams.com/images/biscayne-bay-webcam.jpg',
    description: 'Streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'Miami Beach',
  },
  {
    title: 'Miami Bear Cut Webcam',
    webcamUrl: 'http://www.rsmas.miami.edu/outreach/webcam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/miami-bear-cut-webcam.jpg',
    description:
      'From the roof of the Dougherty Marine Science Center still cam updated every minute.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'Miami Beach',
  },
  // South Beach
  {
    title: 'South Beach Surf Cam',
    webcamUrl:
      'http://www.surfguru.com/south-florida-surf-reports/south-beach-surf-report',
    oldImageUrl: 'https://www.mybeachcams.com/images/south-beach-surf-cam.jpg',
    description: 'Streaming remote control Flash cam from Surfguru.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'South Beach',
  },
  {
    title: 'South Beach Live Cam',
    webcamUrl: 'http://www.chariff.com/south-beach-tv.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/south-beach-live-cam.jpg',
    description: 'Street view large streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'Miami Beach',
    subArea: 'South Beach',
  },
  // South East Florida and The Keys
  // Fort Lauderdale
  {
    title: 'Live Fort Lauderdale WebCams',
    webcamUrl: 'http://www.sunny.org/webcam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/live-fort-lauderdale-webcams.jpg',
    description: 'Slow streaming cams.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Lauderdale',
  },
  {
    title: 'Lauderdale-By-The-Sea Pier Cam',
    webcamUrl: 'http://www.windjammerresort.com/webcam.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/lauderdale-by-the-sea-pier-cam.jpg',
    description:
      'Lauderdale-By-The-Sea Beach & Fishing Pier. Large streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Lauderdale',
  },
  {
    title: 'Fort Lauderdale Harbor Webcam',
    webcamUrl: 'http://www.ftlauderdalewebcam.com',
    oldImageUrl:
      'https://www.mybeachcams.com/images/fort-lauderdale-harbor-webcam.jpg',
    description: 'Streaming pan Tilt Zoom Flash webcam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Lauderdale',
  },
  {
    title: 'Hilton Fort Lauderdale Beach Cam',
    webcamUrl: 'http://www.hiltonbeachcam.com',
    oldImageUrl:
      'https://www.mybeachcams.com/images/hilton-fort-lauderdale-beach-cam.jpg',
    description:
      'Streaming web cam on the beach from the Hitlton Resort in Fort Lauderdale.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Lauderdale',
  },
  {
    title: 'Marriott Fort Lauderdale Beach Cam',
    webcamUrl: 'http://www.ftlauderdalebeachcam.com',
    oldImageUrl:
      'https://www.mybeachcams.com/images/marriott-fort-lauderdale-beach-cam.jpg',
    description:
      'A 24/7 live streaming HD-quality from Courtyard by Marriott at Fort Lauderdale Beach.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Lauderdale',
  },
  {
    title: 'Lauderdale Marina Cam',
    webcamUrl: 'http://15streetfisheries.com/fishcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/lauderdale-marina-cam.jpg',
    description: 'Live View from 15th Street Fisheries at Lauderdale Marina.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Lauderdale',
  },
  // Fort Pierce Inlet
  {
    title: 'Fort Pierce Inlet Surf Cam',
    webcamUrl:
      'http://www.surfline.com/surf-report/ft-pierce-inlet-florida_5335/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/ft-pierce-inlet-surff-cam.jpg',
    description:
      'Live streaming Flash surf cam from Surfline with advertising pre-roll.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Pierce Inlet',
  },
  {
    title: 'St. Lucie County Webcam',
    webcamUrl: 'http://visitstlucie.com/fort-pierce-inlet-webcam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/st-lucie-county-webcam.jpg',
    description: 'Live webcam from St. Lucie County.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Fort Pierce Inlet',
  },
  // Jensen Beach
  {
    title: 'Hobe Sound Beach Cam',
    webcamUrl: 'http://www.evsmartin.com/hsnwr/',
    oldImageUrl: 'https://www.mybeachcams.com/images/hobe-sound-beach-cam.jpg',
    description:
      'Stills and panoramas Updated throughout the day from Hobe Sound National Wildlife Refuge South of Jensen Beach.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Jensen Beach',
  },
  {
    title: 'Bathtub Beach Webcam',
    webcamUrl: 'http://video-monitoring.com/beachcams/bathtub/',
    oldImageUrl: 'https://www.mybeachcams.com/images/bathtub-beach-webcam.jpg',
    description: 'Bathtub Beach Webcam a service of Martin County FL.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Jensen Beach',
  },
  {
    title: 'Jensen Beach Cam',
    webcamUrl: 'http://www.evsmartin.com/index.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/jensen-beach-cam.jpg',
    description:
      'Large still images updated every 10 minutes with a recent Java video clip.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Jensen Beach',
  },
  // Jupiter Inlet
  {
    title: 'Jupiter Inlet Beach Cam',
    webcamUrl: 'http://www.evsjupiter.com/main.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/jupiter-inlet-beach-cam.jpg',
    description:
      'Large still images updated every 10 minutes with a recent Java video clip.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Jupiter Inlet',
  },
  {
    title: 'Jupiter Inlet Camera',
    webcamUrl:
      'http://www.cruisin.me/cruise-port-webcams/united-states/west-palm-beach-florida.php',
    oldImageUrl: 'https://www.mybeachcams.com/images/jupiter-inlet-camera.jpg',
    description: 'Rotating live camera views from Jupiter Inlet Florida.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Jupiter Inlet',
  },
  // Boca Raton
  {
    title: 'Boca Raton Beach Cam',
    webcamUrl: 'http://www.video-monitoring.com/beachcams/boca/',
    oldImageUrl: 'https://www.mybeachcams.com/images/boca-raton-beach-cam.jpg',
    description: 'Stills panoramas and video clips updated throughout the day.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Boca Raton',
  },
  {
    title: 'Boca Raton Surf Cam',
    webcamUrl: 'http://www.bocasurfcam.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/boca-raton-surf-cam.jpg',
    description: 'Still image updated every minute.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Boca Raton',
  },
  // Hollywood Beach
  {
    title: 'Hollywood Beach Live Cam',
    webcamUrl:
      'https://www.skylinewebcams.com/en/webcam/united-states/florida/hollywood/hollywood-beach.html',
    oldImageUrl:
      'https://www.mybeachcams.com/images/hollywood-beach-live-cam.jpg',
    description: 'Live streaming cam on the beach.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Hollywood Beach',
  },
  {
    title: 'Hollywood Beach Camera',
    webcamUrl: 'https://www.local10.com/weather/hollywood-beach-cam',
    oldImageUrl:
      'https://www.mybeachcams.com/images/hollywood-beach-camera.jpg',
    description:
      'ABC Channel 10 News streaming cam with pre-roll advertizement.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Hollywood Beach',
  },
  {
    title: 'Crowne Plaza Hollywood Beach Cam',
    webcamUrl: 'http://www.cphollywoodbeach.com/gallery/web-cam/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/crowne-plaza-hollywood-beach-cam.jpg',
    description:
      'Webcam on the roof at the Crowne Plaza Hollywood Beach Hotel with pan and tilt controls.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Hollywood Beach',
  },
  {
    title: 'Hollywood Broadwalk Beach Cam',
    webcamUrl: 'http://www.floridashollywood.org/beach-cam1.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/hollywood-broadwalk-beach-cam.jpg',
    description:
      'Small streaming cam on the beach from the Ocean Alley Restaurant.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Hollywood Beach',
  },
  // Florida Keys
  {
    title: 'Breezy Palms Resort Cam',
    webcamUrl: 'http://74.92.201.146/view/viewer_index.shtml?id=7665',
    oldImageUrl:
      'https://www.mybeachcams.com/images/breezy-palms-resort-cam.jpg',
    description:
      'Breezy Palms Resort in Oceanside Florida Keys. Large streaming cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Casa Marina',
    webcamUrl: 'http://www.fla-keys.com/webcams/casa-marina/',
    oldImageUrl: 'https://www.mybeachcams.com/images/casa-marina.jpg',
    description: 'Casa Marina.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Cheeca Lodge & Spa',
    webcamUrl: 'http://www.fla-keys.com/webcams/cheeca/',
    oldImageUrl: 'https://www.mybeachcams.com/images/cheeca.jpg',
    description: 'Cheeca Lodge & Spa.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Dolphin Research Center',
    webcamUrl: 'http://www.fla-keys.com/webcams/dolphin-research-center/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/dolphin-research-center.jpg',
    description: 'Dolphin Research Center.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Dolphins Plus Bayside',
    webcamUrl: 'http://www.fla-keys.com/webcams/dolphins-plus/',
    oldImageUrl: 'https://www.mybeachcams.com/images/dolphins-plus.jpg',
    description: 'Dolphins Plus Bayside.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Florida Keys Community College',
    webcamUrl: 'http://www.fla-keys.com/webcams/fkcc/',
    oldImageUrl: 'https://www.mybeachcams.com/images/fkcc.jpg',
    description: 'Florida Keys Community College.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Fort Zachary Taylor: Beach Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/fort-zachary-taylor-beach/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/fort-zachary-taylor-beach.jpg',
    description: 'Fort Zachary Taylor: Beach Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Galleon Marina',
    webcamUrl: 'http://www.fla-keys.com/webcams/galleon-marina/',
    oldImageUrl: 'https://www.mybeachcams.com/images/galleon-marina.jpg',
    description: 'Galleon Marina.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Harborside Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/harborside/',
    oldImageUrl: 'https://www.mybeachcams.com/images/harborside.jpg',
    description: 'Harborside Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Hawks Cay Resort',
    webcamUrl: 'http://www.fla-keys.com/webcams/hawks-cay/',
    oldImageUrl: 'https://www.mybeachcams.com/images/hawks-cay.jpg',
    description: 'Hawks Cay Resort.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Irish Kevin's: Bar Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/irish-kevins-bar/',
    oldImageUrl: 'https://www.mybeachcams.com/images/irish-kevins-bar.jpg',
    description: "Irish Kevin's: Bar Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Irish Kevin's: Stage Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/irish-kevins-stage/',
    oldImageUrl: 'https://www.mybeachcams.com/images/irish-kevins-stage.jpg',
    description: "Irish Kevin's: Stage Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Irish Kevin's: Street Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/irish-kevins-street/',
    oldImageUrl: 'https://www.mybeachcams.com/images/irish-kevins-street.jpg',
    description: "Irish Kevin's: Street Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Islamorada Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/islamorada-cam/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/islamorada-cam.jpg',
    description: 'Islamorada Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Islamorada Sandbar Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/islamorada-sandbar/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/islamorada-sandbar.jpg',
    description: 'Islamorada Sandbar Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Island Dolphin Care',
    webcamUrl: 'http://www.fla-keys.com/webcams/island-dolphin-care/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/island-dolphin-care.jpg',
    description: 'Island Dolphin Care.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Key Deer Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/key-deer-cam/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/key-deer-cam.jpg',
    description: 'Key Deer Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Key Largo Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/key-largo-cam/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/key-largo-cam.jpg',
    description: 'Key Largo Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Key Largo North Anchorage',
    webcamUrl: 'http://www.fla-keys.com/webcams/key-largo-north/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/key-largo-north.jpg',
    description: 'Key Largo North Anchorage.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Key West Butterfly Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/key-west-butterfly/',
    oldImageUrl: 'https://www.mybeachcams.com/images/key-west-butterfly.jpg',
    description: 'Key West Butterfly Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Key West Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/key-west-cam/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/key-west-cam.jpg',
    description: 'Key West Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Key West Marriott Beachside',
    webcamUrl: 'http://www.fla-keys.com/webcams/key-west-marriott-beachside/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/key-west-marriott-beachside.jpg',
    description: 'Key West Marriott Beachside.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Live Duval Street',
    webcamUrl: 'http://www.liveduvalstreet.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/live-duval-street.jpg',
    description: 'Live Duval Street.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Lower Keys Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/lower-keys-cam/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/lower-keys-cam.jpg',
    description: 'Lower Keys Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Mallory Square',
    webcamUrl: 'http://www.fla-keys.com/webcams/mallory-square/',
    oldImageUrl: 'https://www.mybeachcams.com/images/mallory-square.jpg',
    description: 'Mallory Square.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Marathon Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/marathon-cam/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/marathon-cam.jpg',
    description: 'Marathon Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Margaritaville Key West Resort & Marina',
    webcamUrl: 'http://www.fla-keys.com/webcams/margaritaville-key-west/',
    oldImageUrl:
      'https://www.mybeachcams.com/images/margaritaville-key-west.jpg',
    description: 'Margaritaville Key West Resort & Marina.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Mile Marker 0',
    webcamUrl: 'http://www.fla-keys.com/webcams/mile-marker-zero/',
    oldImageUrl: 'https://www.mybeachcams.com/images/mile-marker-zero.jpg',
    description: 'Mile Marker 0.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Ocean Key Resort: Bar Ca',
    webcamUrl: 'http://www.fla-keys.com/webcams/ocean-key-bar/control/',
    oldImageUrl: 'https://www.mybeachcams.com/images/ocean-key-bar.jpg',
    description: 'Ocean Key Resort: Bar Ca.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Ocean Key Resort: Sunset Pier Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/ocean-key-sunset-pier/',
    oldImageUrl: 'https://www.mybeachcams.com/images/ocean-key-sunset-pier.jpg',
    description: 'Ocean Key Resort: Sunset Pier Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Oceans Edge Key West Hotel & Maina',
    webcamUrl: 'http://www.fla-keys.com/webcams/oceans-edge/',
    oldImageUrl: 'https://www.mybeachcams.com/images/oceans-edge.jpg',
    description: 'Oceans Edge Key West Hotel & Marina.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Pilot House Marina',
    webcamUrl: 'http://www.fla-keys.com/webcams/pilot-house/',
    oldImageUrl: 'https://www.mybeachcams.com/images/pilot-house.jpg',
    description: 'Pilot House Marina.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Pines & Palms Resort',
    webcamUrl: 'http://www.fla-keys.com/webcams/pines-palms/',
    oldImageUrl: 'https://www.mybeachcams.com/images/pines-palms.jpg',
    description: 'Pines & Palms Resort.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Rick's Bar",
    webcamUrl: 'http://www.fla-keys.com/webcams/ricks-bar-key-west/',
    oldImageUrl: 'https://www.mybeachcams.com/images/ricks-bar-key-west.jpg',
    description: "Rick's Bar.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Robbie's Tarpon Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/robbies-tarpon-cam/',
    oldImageUrl: 'https://www.mybeachcams.com/images/robbies-tarpon-cam.jpg',
    description: "Robbie's Tarpon Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Saltwater Angler',
    webcamUrl: 'http://www.fla-keys.com/webcams/saltwater-angler/',
    oldImageUrl: 'https://www.mybeachcams.com/images/saltwater-angler.jpg',
    description: 'Saltwater Angler.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Schooner Wharf',
    webcamUrl: 'http://www.fla-keys.com/webcams/schooner-wharf/',
    oldImageUrl: 'https://www.mybeachcams.com/images/schooner-wharf.jpg',
    description: 'Schooner Wharf.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Sheraton Suites',
    webcamUrl: 'http://www.fla-keys.com/webcams/sheraton-suites/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sheraton-suites.jpg',
    description: 'Sheraton Suites.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Sloppy Joe's: Bar Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/sloppy-joes-bar/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sloppy-joes-bar.jpg',
    description: "Sloppy Joe's: Bar Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Sloppy Joe's: Crowd Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/sloppy-joes-crowd/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sloppy-joes-crowd.jpg',
    description: "Sloppy Joe's: Crowd Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Sloppy Joe's: Stage Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/sloppy-joes-stage/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sloppy-joes-stage.jpg',
    description: "Sloppy Joe's: Stage Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Smokin' Tuna Saloon: Bar Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/smokin-tuna-bar/',
    oldImageUrl: 'https://www.mybeachcams.com/images/smokin-tuna-bar.jpg',
    description: "Smokin' Tuna Saloon: Bar Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: "Smokin' Tuna Saloon: Stage Cam",
    webcamUrl: 'http://www.fla-keys.com/webcams/smokin-tuna-stage/',
    oldImageUrl: 'https://www.mybeachcams.com/images/smokin-tuna-stage-1.jpg',
    description: "Smokin' Tuna Saloon: Stage Cam.",
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Southernmost Beach Resort',
    webcamUrl: 'http://www.fla-keys.com/webcams/southernmost-beach/',
    oldImageUrl: 'https://www.mybeachcams.com/images/southernmost-beach.jpg',
    description: 'Southernmost Beach Resort.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Southernmost Point',
    webcamUrl: 'http://southernmostpointwebcam.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/southernmost-point.jpg',
    description: 'Southernmost Point.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Sugarloaf Key',
    webcamUrl: 'http://www.fla-keys.com/webcams/sugarloaf-key/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sugarloaf-key.jpg',
    description: 'Sugarloaf Key.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Sunset Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/sunset/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sunset.jpg',
    description: 'Sunset Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Sunset Key Cottages',
    webcamUrl: 'http://www.fla-keys.com/webcams/sunset-key/',
    oldImageUrl: 'https://www.mybeachcams.com/images/sunset-key.jpg',
    description: 'Sunset Key Cottages.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Tranquility Bay',
    webcamUrl: 'http://www.fla-keys.com/webcams/tranquility-bay/',
    oldImageUrl: 'https://www.mybeachcams.com/images/tranquility-bay.jpg',
    description: 'Tranquility Bay.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Two Friends Karaoke Cam',
    webcamUrl: 'http://www.fla-keys.com/webcams/two-friends-karaoke/',
    oldImageUrl: 'https://www.mybeachcams.com/images/two-friends-karaoke.jpg',
    description: 'Two Friends Karaoke Cam.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  {
    title: 'Wicker Guest House',
    webcamUrl: 'http://www.fla-keys.com/webcams/wicker-guest-house/',
    oldImageUrl: 'https://www.mybeachcams.com/images/wicker-guest-house.jpg',
    description: 'Wicker Guest House.',
    country: 'US',
    state: 'FL',
    area: 'South East Florida and The Keys',
    subArea: 'Florida Keys',
  },
  // Gulf Coast
  // Tampa Bay
  {
    title: 'Madeira Beach Cam',
    webcamUrl: 'http://www.skylineofmadeirabeach.com/skyline-beach.asp',
    oldImageUrl: 'https://www.mybeachcams.com/images/madeira-beach-cam.jpg',
    description:
      'Off of Tampa Bay just north of Treasure Island.  Streaming Flash rooftop cam on Madeira Beach.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Tampa Bay',
  },
  {
    title: 'Indian Shores Beach Cam',
    webcamUrl: 'http://www.sunfun1925.com/webcam_beach_view.htm',
    oldImageUrl:
      'https://www.mybeachcams.com/images/indian-shores-beach-cam.jpg',
    description:
      'Streaming webcam on the tropical barrier islands of Tampa Bay between Clearwater and St. Pete.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Tampa Bay',
  },
  {
    title: 'Bokeelia Marina Cam',
    webcamUrl: 'http://www.capeweather.com/webcam5.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/bokeelia-marina-cam.jpg',
    description: 'Marina cam off of Tampa Bay. Large steaming webcam.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Tampa Bay',
  },
  {
    title: 'Bradenton Beach Cam',
    webcamUrl:
      'http://www.myfoxtampabay.com/category/235594,bradenton-beach-live-webcam-manatee-county-florida',
    oldImageUrl: 'https://www.mybeachcams.com/images/bradenton-beach-cam.jpg',
    description:
      'Live from the Beach House Restaurant in Bradenton Beach off of Tampa Bay.  Image updates every 60 seconds.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Tampa Bay',
  },
  // Sarasota
  {
    title: 'Sarasota/Siesta Key Cam',
    webcamUrl: 'http://www.sarasotasurf.com/Webcam.aspx',
    oldImageUrl:
      'https://www.mybeachcams.com/images/sarasota-siesta-key-cam.jpg',
    description: 'Streaming web cam. Requires Java plug-in.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Sarasota',
  },
  {
    title: 'Siesta Key Beach Cam',
    webcamUrl: 'http://www.seesarasotalive.com/siesta-key',
    oldImageUrl: 'https://www.mybeachcams.com/images/siesta-key-beach-cam.jpg',
    description: 'Streaming Flash cam near Sarasota.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Sarasota',
  },
  // Fort Myers Beach Cam
  {
    title: 'Fort Myers Beach Cam',
    webcamUrl:
      'http://www.nbc-2.com/category/171057/webcams-diamondhead-resort-fort-myers-beach',
    oldImageUrl: 'https://www.mybeachcams.com/images/fort-myers-beach-cam.jpg',
    description: 'Still shot from NBC Channel 2.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Fort Myers',
  },
  {
    title: 'Fort Myers Cam',
    webcamUrl:
      'https://www.earthcam.com/usa/florida/fortmyers/?cam=fort_myers_hd',
    oldImageUrl: 'https://www.mybeachcams.com/images/fort-myers-cam.jpg',
    description: 'Live streaming webcam from Fort Myers Beach.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Fort Myers',
  },
  // Cape Haze - Charlotte Harbor
  {
    title: 'Cape Haze Gator Cam',
    webcamUrl: 'http://home.comcast.net/~kandjh/webcam/gatorcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/cape-haze-gator-cam.jpg',
    description:
      'Just off of Charlotte Harbor. Still image webcam updates every 30 seconds during the daytime.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Cape Haze - Charlotte Harbor',
  },
  // Captiva Island Off of Cape Coral
  {
    title: 'Captiva Island Cam',
    webcamUrl: 'http://tweencam.tween-waters.com/twcam/twcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/captiva-island-cam.jpg',
    description:
      'Off of Cape Coral. Streaming webcam. Does not work on all browsers.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Captiva Island Off of Cape Coral',
  },
  {
    title: 'Captiva Island Beach Cam',
    webcamUrl: 'http://www.muckyduck.com/beach-cam2.php',
    oldImageUrl:
      'https://www.mybeachcams.com/images/captiva-island-beach-cam.jpg',
    description: 'Streaming webcam. Off of Cape Coral.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Captiva Island Off of Cape Coral',
  },
  {
    title: 'Sanibel Island Beach Cam',
    webcamUrl: 'http://www.islandinnsanibel.com/beachcam-live-video',
    oldImageUrl:
      'https://www.mybeachcams.com/images/sanibel-island-beach-cam.jpg',
    description: 'Off of Cape Coral. Streaming Flash cam.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Captiva Island Off of Cape Coral',
  },
  {
    title: 'Sanibel Island Cam',
    webcamUrl: 'http://72.236.138.36/view/index.shtml',
    oldImageUrl: 'https://www.mybeachcams.com/images/sanibel-island-cam.jpg',
    description: 'Streaming webcam from Sanibel Holiday Inn off of Cape Coral.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Captiva Island Off of Cape Coral',
  },
  // Vanderbilt south of Cape Coral
  {
    title: 'Vanderbilt Beach Cam',
    webcamUrl: 'http://www.vanderbiltbeachresort.com/',
    oldImageUrl: 'https://www.mybeachcams.com/images/vanderbilt-beach-cam.jpg',
    description: 'Click link on web page. Streaming webcam.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Vanderbilt south of Cape Coral',
  },
  // Naples
  {
    title: 'Marco Island Beach',
    webcamUrl: 'http://www.marcosun.com/marco_island_webcam.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/marco-island-beach.jpg',
    description:
      'Still image update every 10 minutes just south of Naples. Requires Java plug-in.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Naples',
  },
  {
    title: 'Marco Island Web Cam',
    webcamUrl: 'http://www.naplesnews.com/webcams/jolley_bridge/',
    oldImageUrl: 'https://www.mybeachcams.com/images/marco-island-web-cam.jpg',
    description:
      'Jolley Bridge Camera at the Marco Island Yacht Club. Still Images updated every minute.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Naples',
  },
  // Clearwater
  {
    title: 'Clearwater Beach Cam',
    webcamUrl: 'http://www.ritzresortclearwaterbeach.com/webcam.html',
    oldImageUrl: 'https://www.mybeachcams.com/images/clearwater-beach-cam.jpg',
    description: 'Streaming pan tilt &amp; zoom cam. Requires Java plug-in.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Clearwater',
  },
  {
    title: 'Clearwater Beach Cams',
    webcamUrl: 'http://www.beachtourism.com/pier.htm',
    oldImageUrl: 'https://www.mybeachcams.com/images/clearwater-beach-cams.jpg',
    description: 'Several still image cams updating every 15 seconds.',
    country: 'US',
    state: 'FL',
    area: 'Gulf Coast',
    subArea: 'Clearwater',
  },
]
export default cams
