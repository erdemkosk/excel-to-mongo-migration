   const DBS = {
    warehouseDevShard: 'mongodb+srv://warehouseService:ARuGuFHmsuIj942Q@warehouse-dev-rzfsd.mongodb.net/admin?replicaSet=warehouse-dev-shard-0&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1',
    testDb : 'mongodb+srv://test:Testtest00@cluster0-oqyf8.mongodb.net/test?retryWrites=true&w=majority',
   }

    const CONSTRAINT_IDS = {
        motorConstraintId : "5daa2d6551cb0b0c4c22fcee",
        mituConstraintId : "5daa2d2251cb0b0c4c22fced",
        carConstraintId : "5daa2daa51cb0b0c4c22fcef",
    }

    const CITIES = {
        İstanbul : "55999ad00000010001000000",
        İzmir : "5dcf11d00000010002000000",
        Ankara : "5dd84c500000010003000000",
        Bursa : "5de186d00000010004000000",
        Kocaeli : "5df3fbd00000010005000000",
    }
    
    const VEHICLE_STATUSES  = {
        AVAILABLE: 1000,
        IN_USE: 2000,
        IN_TRANSFER: 2100,
        IN_SERVICE: 2200,
        INACTIVE: 3000,
      };

      const MERGED_WAREHOUSE_AND_STORES = [
        {
          "name": "Bomonti",
          "_id": "555cc03c56861c0c00a0bd9b"
        },
        {
          "name": "Ortaköy",
          "_id": "55646fc47051560c00cc8398"
        },
        {
          "name": "Maslak",
          "_id": "556c72a23ad99d0c00523c5d"
        },
        {
          "name": "Dikilitaş",
          "_id": "556f0bee1ad7b80c002d44a7"
        },
        {
          "name": "Barbaros",
          "_id": "557062ccac86100c00cdb5ef"
        },
        {
          "name": "Cevahir",
          "_id": "5577f739d8631b0c00fb4b70"
        },
        {
          "name": "Kanyon",
          "_id": "55881a8318e9cc0c001cd4a2"
        },
        {
          "name": "Bahçelievler",
          "_id": "56407e825316580c0058c41b"
        },
        {
          "name": "Üsküdar",
          "_id": "564490d03f158a0c00ccae84"
        },
        {
          "name": "Kozyatağı",
          "_id": "564492193f158a0c00ccb086"
        },
        {
          "name": "Fatih",
          "_id": "5659d6f23c84c20c003cd032"
        },
        {
          "name": "Maltepe",
          "_id": "5659e2e23c84c20c003cdc2d"
        },
        {
          "name": "Moda",
          "_id": "56a228e90775590f006f8ba0"
        },
        {
          "name": "Ümraniye",
          "_id": "56d6bbf7772a46030078f5f1"
        },
        {
          "name": "Baraj Yolu",
          "_id": "56d6bd82772a46030078f636"
        },
        {
          "name": "Şerifali",
          "_id": "56f43224707a850300a18de8"
        },
        {
          "name": "Kurtköy",
          "_id": "57bc2d35312bf20300e9fe62"
        },
        {
          "name": "Küçükçekmece",
          "_id": "57bc2fcb851ebd0300209bcf"
        },
        {
          "name": "Profilo",
          "_id": "57bc3760312bf20300ea04f2"
        },
        {
          "name": "Halkalı",
          "_id": "57bc50b1312bf20300ea1707"
        },
        {
          "name": "Beylikdüzü",
          "_id": "57bf38ac96a6b403008227bb"
        },
        {
          "name": "Kayışdağı",
          "_id": "57d2619f012ab60300bfe504"
        },
        {
          "name": "İncirli",
          "_id": "57ea95d7aa27f80300ee9f3b"
        },
        {
          "name": "Gaziosmanpaşa",
          "_id": "57ea9884aa27f80300eea12f"
        },
        {
          "name": "Kavacık",
          "_id": "57ea9b264360d400035ca270"
        },
        {
          "name": "Küçükyalı",
          "_id": "57eba168351c86000321de0d"
        },
        {
          "name": "Karanfilköy",
          "_id": "57ecd7b3adbec60003c69f2c"
        },
        {
          "name": "Çekmeköy",
          "_id": "57f63b451a3ccf0003a8040f"
        },
        {
          "name": "Veliefendi",
          "_id": "57fb617589145b0003a485c5"
        },
        {
          "name": "Kağıthane",
          "_id": "57ff667348532700039caa58"
        },
        {
          "name": "Soyak Yenişehir",
          "_id": "57ff913409143e00032f0b49"
        },
        {
          "name": "Kartal",
          "_id": "5800ee2a0fcf1600038a2047"
        },
        {
          "name": "Örnek",
          "_id": "580228a367c14c0003ef51cf"
        },
        {
          "name": "Çengelköy",
          "_id": "58173ba88a9f440003bf4a9c"
        },
        {
          "name": "Yeniköy",
          "_id": "581c638d64c88f0003d71398"
        },
        {
          "name": "İkitelli",
          "_id": "582b18cf4756f60004e3ea56"
        },
        {
          "name": "Pendik",
          "_id": "583d63150cf7c000048f2033"
        },
        {
          "name": "Acıbadem",
          "_id": "583da98a784e5000045d1aff"
        },
        {
          "name": "Göktürk",
          "_id": "584abc3e30c09e0004e0c719"
        },
        {
          "name": "Avcılar",
          "_id": "585b9935dcd4ec0004985f9c"
        },
        {
          "name": "TEM Avrupa Konutları",
          "_id": "586a31f3dc795000045aadf1"
        },
        {
          "name": "Güneşli",
          "_id": "587349a7ed1bc700048bda90"
        },
        {
          "name": "Topkapı",
          "_id": "587cbf1c56a47000048c16cc"
        },
        {
          "name": "Soğanlık",
          "_id": "58834f4de8c17c0004e950c8"
        },
        {
          "name": "Doğu Ataşehir",
          "_id": "588f5df5274aea00046a1e7b"
        },
        {
          "name": "Alibeyköy",
          "_id": "5899ad98d5b34d0004dd429f"
        },
        {
          "name": "Esenyurt",
          "_id": "58a5ab1239f92100041a9e28"
        },
        {
          "name": "Cihangir",
          "_id": "58b4312f292ee600049fc76b"
        },
        {
          "name": "Yenibosna",
          "_id": "58b432cc292ee600049fc8d7"
        },
        {
          "name": "Caddebostan",
          "_id": "58b43483ef09f6000427a3eb"
        },
        {
          "name": "Zümrütevler",
          "_id": "58b57c0e5993b40004e7216d"
        },
        {
          "name": "Zeynep Kamil",
          "_id": "58b59b92a7f2bb0004c46184"
        },
        {
          "name": "Hisarüstü",
          "_id": "58da7eea2a4d2a0004a096ef"
        },
        {
          "name": "Bulgurlu",
          "_id": "59baa2232ab3b90004f090c1"
        },
        {
          "name": "Perpa",
          "_id": "5a211bf86a15dc0004d3e3d9"
        },
        {
          "name": "Seyrantepe",
          "_id": "5a33e1540fdedc000401cf0d"
        },
        {
          "name": "Bahçeşehir",
          "_id": "5a33e25d46ceb9000405f563"
        },
        {
          "name": "Taşdelen",
          "_id": "5a33e36946ceb9000405f638"
        },
        {
          "name": "Sultanbeyli",
          "_id": "5a4ca939b62370000470fce7"
        },
        {
          "name": "Tuzla",
          "_id": "5a4caeae14e51900040d596f"
        },
        {
          "name": "Sahrayıcedit",
          "_id": "5a814b17d6bc3300043b8c73"
        },
        {
          "name": "Fikirtepe",
          "_id": "5a8558e00f85bd0004dd5208"
        },
        {
          "name": "Batı Ataşehir",
          "_id": "5aaa81050c434d0004db52f2"
        },
        {
          "name": "Bayrampaşa",
          "_id": "5aaa896d0c434d0004db55f0"
        },
        {
          "name": "Feneryolu",
          "_id": "5aace64d3a335200040a5432"
        },
        {
          "name": "Bostancı",
          "_id": "5ad83a11a14ba900046f54a7"
        },
        {
          "name": "Suadiye",
          "_id": "5ae306f1a9d26000045e5bc9"
        },
        {
          "name": "Maslak Eclipse",
          "_id": "5ae6d8a253d0a10004d207f8"
        },
        {
          "name": "Sıracevizler",
          "_id": "5b83c4d364195f000456cfbf"
        },
        {
          "name": "Ulus",
          "_id": "5baeb6dc0c9ce6003402b48c"
        },
        {
          "name": "Viaport",
          "_id": "5bf7e12808fe46001e121414"
        },
        {
          "name": "Nişantaşı",
          "_id": "5c05793e6ea39a08b22a9616"
        },
        {
          "name": "Kağıthane Nef",
          "_id": "5c0eaca4110e9a1422c26129"
        },
        {
          "name": "Basın Ekspres",
          "_id": "5c20c943f133550001a9e657"
        },
        {
          "name": "Altayçeşme",
          "_id": "5c38e9ab4b149200011a4b9a"
        },
        {
          "name": "Florya",
          "_id": "5c38ebf04b149200011a4d25"
        },
        {
          "name": "Dudullu",
          "_id": "5c4ebf49c1b0120001d78d68"
        },
        {
          "name": "Koşuyolu",
          "_id": "5c4ec137bfecd2000159bfec"
        },
        {
          "name": "Akbatı",
          "_id": "5c4eeb55c1b0120001d7d1ee"
        },
        {
          "name": "5. Levent",
          "_id": "5c6c0ac6c3e5ed00012ed308"
        },
        {
          "name": "Atakent",
          "_id": "5c6e53345b6cb20001bb2602"
        },
        {
          "name": "Tuzla Marina",
          "_id": "5ca4a9effda114000163f4dd"
        },
        {
          "name": "Küçükbakkalköy",
          "_id": "5cc168ba6fd0e600011ea763"
        },
        {
          "name": "İçerenköy",
          "_id": "5cc2fa2c57bde7000142fda5"
        },
        {
          "name": "Yakuplu",
          "_id": "5cff880339a6920001a3328e"
        },
        {
          "name": "Üst Bostancı",
          "_id": "5d22ec3e406d690001cd7e52"
        },
        {
          "name": "Firuzköy",
          "_id": "5d5d3c8bd851c00001604c7a"
        },
        {
          "name": "Mimaroba",
          "_id": "5d62fe0fda5b2d0001bd7fdc"
        },
        {
          "name": "Yakacık",
          "_id": "5d63011500238f000131fd6c"
        },
        {
          "name": "Ümraniye Çamlık",
          "_id": "5d63047bda5b2d0001bd85be"
        },
        {
          "name": "Merdivenköy",
          "_id": "5d64fb841b9eff00014d688b"
        },
        {
          "name": "Kandilli",
          "_id": "5d6926c251d774000190e182"
        },
        {
          "name": "Alkent",
          "_id": "5d692a0c51d774000190e4b2"
        },
        {
          "name": "Aydos",
          "_id": "5d692b413ebe9000019f1f4a"
        },
        {
          "name": "Tüyap",
          "_id": "5d692c6c51d774000190e7cf"
        },
        {
          "name": "Güngören",
          "_id": "5d692df23ebe9000019f2338"
        },
        {
          "name": "Sefaköy",
          "_id": "5d6e993df4c0350001cb440c"
        },
        {
          "name": "Balat",
          "_id": "5d6ea103f4c0350001cb57a1"
        },
        {
          "name": "Batışehir",
          "_id": "5d6ea5e2f4c0350001cb6011"
        },
        {
          "name": "Dragos",
          "_id": "5d701e2a7a43350001a6d81f"
        },
        {
          "name": "Selimiye",
          "_id": "5d701f557a43350001a6d931"
        },
        {
          "name": "Alemdağ",
          "_id": "5d78f4c4d555790001fe1093"
        },
        {
          "name": "Başakşehir",
          "_id": "5d78fa53d555790001fe1fc6"
        },
        {
          "name": "Kuzguncuk",
          "_id": "5d7d34abaef51100013f23cf"
        },
        {
          "name": "19 Mayıs",
          "_id": "5d7feb8d0ed2c200010e06a2"
        },
        {
          "name": "Sarıyer",
          "_id": "5d7fef9e0ed2c200010e0a9a"
        },
        {
          "name": "Erenköy",
          "_id": "5d853b0bf2f86b33196a3f61"
        },
        {
          "name": "Davutpaşa",
          "_id": "5daee08d730fa8dcf50e3227"
        },
        {
          "name": "Vadi İstanbul",
          "_id": "5db1ee560ca56b32f8c731b5"
        },
        {
          "name": "Kasımpaşa",
          "_id": "5db1f19a0ca56b6f8ac73357"
        },
        {
          "name": "Ataköy",
          "_id": "5dd4d68847ab01f7fe3fab98"
        },
        {
          "name": "Piyalepaşa",
          "_id": "5dd4d6b547ab010e543fabc9"
        },
        {
          "name": "Yıldıztabya",
          "_id": "5dd4d6e147ab01f8d73fabf3"
        },
        {
          "name": "Karlıktepe",
          "_id": "5dee88c8c65a2597f49b857b"
        },
        {
          "name": "Büyükbakkalköy",
          "_id": "5dee890b80f47b48d59af337"
        },
        {
          "name": "Ünalan",
          "_id": "5dee893df03a3959016e0bf8"
        },
        {
          "name": "Sultangazi",
          "_id": "5e09bd1a64743b86d02ad0ac"
        },
        {
          "name": "Sarıyer Maden",
          "_id": "5e2df108c0203649e9df86bb"
        },
        {
          "name": "Acarlar",
          "_id": "5e2df2f6c02036ebb1df8887"
        },
        {
          "name": "Tarabya",
          "_id": "5e4b7b31f82c2e203559d470"
        },
        {
          "name": "Halkalı Merkez",
          "_id": "5e6a52ce9e4a6171bb22138e"
        },
        {
          "name": "Kemerburgaz",
          "_id": "5e6a5681092a44687b87f286"
        },
        {
          "name": "Yakuplu Sanayi",
          "_id": "5e6a5825badef2d6e8e19cc2"
        },
        {
          "name": "Ümraniye Plazalar",
          "_id": "5e6f658b7901c5d8ec21e815"
        },
        {
          "name": "Ataşehir Getir Büyük",
          "_id": "5ceeac17b1fec22f35087aaf"
        },
        {
          "name": "Zincirlikuyu Getir Büyük",
          "_id": "5db9759777a0c71180d7694c"
        },
        {
          "name": "Karşıyaka",
          "_id": "5dc32d8b734a192200caddf8"
        },
        {
          "name": "Balçova",
          "_id": "5dc32db6734a192200caddf9"
        },
        {
          "name": "Bornova",
          "_id": "5dc32dbf734a192200caddfa"
        },
        {
          "name": "Bostanlı",
          "_id": "5dc32dc9734a192200caddfb"
        },
        {
          "name": "Buca",
          "_id": "5dc32e4d734a192200caddfc"
        },
        {
          "name": "Güzelyalı",
          "_id": "5dc32e58734a192200caddfd"
        },
        {
          "name": "Karabağlar",
          "_id": "5dc32e61734a192200caddfe"
        },
        {
          "name": "Kordon",
          "_id": "5dc32e65734a192200caddff"
        },
        {
          "name": "Mavişehir",
          "_id": "5dc32e6d734a192200cade00"
        },
        {
          "name": "Oran",
          "_id": "5dcafe63e2c61b1e52cf1703"
        },
        {
          "name": "Göksu Park",
          "_id": "5dcafe6ae2c61b1e52cf1704"
        },
        {
          "name": "Ayrancı",
          "_id": "5dcafe71e2c61b1e52cf1705"
        },
        {
          "name": "Yaşamkent",
          "_id": "5dcafe78e2c61b1e52cf1706"
        },
        {
          "name": "Seyranbağları",
          "_id": "5dcafe7ee2c61b1e52cf1707"
        },
        {
          "name": "Çukurambar",
          "_id": "5dcafe85e2c61b1e52cf1708"
        },
        {
          "name": "Anıttepe",
          "_id": "5dcafe8be2c61b1e52cf1709"
        },
        {
          "name": "Keçiören",
          "_id": "5dcafe90e2c61b1e52cf170a"
        },
        {
          "name": "Birlik",
          "_id": "5dcafe95e2c61b1e52cf170b"
        },
        {
          "name": "Çayyolu",
          "_id": "5dcafe9be2c61b1e52cf170c"
        },
        {
          "name": "Demetevler",
          "_id": "5dcafea1e2c61b1e52cf170d"
        },
        {
          "name": "Görükle",
          "_id": "5dda9a75b434cd6143a33f8c"
        },
        {
          "name": "Özlüce",
          "_id": "5dda9a7ab434cd6143a33f8d"
        },
        {
          "name": "İhsaniye",
          "_id": "5dda9a80b434cd6143a33f8e"
        },
        {
          "name": "Beşevler",
          "_id": "5dda9a86b434cd6143a33f8f"
        },
        {
          "name": "Çekirge",
          "_id": "5dda9a8cb434cd6143a33f90"
        },
        {
          "name": "Yahya Kaptan",
          "_id": "5de65d51b434cd6143a3485c"
        },
        {
          "name": "Çayırova",
          "_id": "5de65d5bb434cd6143a3485e"
        },
        {
          "name": "Gebze",
          "_id": "5dea3a8fb434cd6143a34900"
        },
        {
          "name": "Etlik",
          "_id": "5dfb5587810db101416b794a"
        },
        {
          "name": "Batıkent",
          "_id": "5e2dfcdb61df150a60e44ec4"
        },
        {
          "name": "Eryaman",
          "_id": "5e2dfcf84377e6b753d73ff4"
        },
        {
          "name": "Asansör",
          "_id": "5e3f09a74377e621e2d73ff5"
        },
        {
          "name": "Çiğli",
          "_id": "5e3f0aa14377e68237d73ff6"
        },
        {
          "name": "İzmit",
          "_id": "5e4a5fc4bf9147b62a770611"
        },
        {
          "name": "Yiğitler",
          "_id": "5e50f79bbf91472a8477062c"
        },
        {
          "name": "Pınarbaşı",
          "_id": "5e50fb25bf9147d76677062d"
        },
        {
          "name": "Alacaatlı",
          "_id": "5e5e4442ef84bd09f36e2732"
        },
        {
          "name": "Gaziemir",
          "_id": "5e6f46e4e6f13b313772974a"
        },
        {
          "name": "Erzene",
          "_id": "5e6f4b254e1c5f2f27d6523d"
        },
        {
          "name": "Ömer Paşa",
          "_id": "5e7dec6df995aa5d44959668"
        }
       ]
       
      const MERGED_FRANCHISE = [
        {
          "name": "Getir",
          "_id": "580612547f98dd6caa26e93a"
        },
        {
          "name": "Mustafa Menteşoğlu",
          "_id": "5807715c23e5b3ed4f36377a"
        },
        {
          "name": "Selçuk Yıldırım",
          "_id": "5807715c23e5b3ed4f36377b"
        },
        {
          "name": "Mehmet Yalçınkaya",
          "_id": "5807715c23e5b3ed4f36377c"
        },
        {
          "name": "Murat Arıcan",
          "_id": "5807715d23e5b3ed4f36377d"
        },
        {
          "name": "Yusuf Ural",
          "_id": "5807715d23e5b3ed4f36377e"
        },
        {
          "name": "Mehmet Karadoğan",
          "_id": "5807715e23e5b3ed4f36377f"
        },
        {
          "name": "Fatih Karabağ",
          "_id": "5807715e23e5b3ed4f363780"
        },
        {
          "name": "Şafak Sabırhoşgör",
          "_id": "5807715e23e5b3ed4f363781"
        },
        {
          "name": "Mustafa Teker Lojistik Gıda ve İnşaat İthalat İhracat Ticaret Limited Şirketi",
          "_id": "5807715f23e5b3ed4f363782"
        },
        {
          "name": "Alper Yıldız",
          "_id": "5807715f23e5b3ed4f363783"
        },
        {
          "name": "Ali Dal",
          "_id": "5807715f23e5b3ed4f363784"
        },
        {
          "name": "Mehmet Tutal",
          "_id": "580a1ac72fbe51b36687b420"
        },
        {
          "name": "Alkan Kıraç",
          "_id": "580a1ad32fbe51b36687b421"
        },
        {
          "name": "Kazım Ercan",
          "_id": "580a1adb2fbe51b36687b422"
        },
        {
          "name": "Mehmet Kayabaşı",
          "_id": "580a1ae42fbe51b36687b423"
        },
        {
          "name": "Mervan Tekin",
          "_id": "5820a0f92fbe51b36695f67b"
        },
        {
          "name": "Mustafa Fırat Yıldırım",
          "_id": "58233e9a2fbe51b366960a19"
        },
        {
          "name": "Yakup Özdoğan",
          "_id": "58369a2e2fbe51b36696ae44"
        },
        {
          "name": "Süleyman Yılmaz",
          "_id": "5842b7e42fbe51b366971ece"
        },
        {
          "name": "Sedat Karlı",
          "_id": "5842b8122fbe51b366971ecf"
        },
        {
          "name": "Alpaslan Çelik",
          "_id": "5892277d2fbe51b3669a11b2"
        },
        {
          "name": "Mehmet Üzgen",
          "_id": "5893a7b42fbe51b3669a21f5"
        },
        {
          "name": "Adem Öksüz",
          "_id": "5898f5add4c6826122dea30a"
        },
        {
          "name": "Selçuk Ercan & Uğur Bingöl",
          "_id": "5898f6f1d4c6826122dea30c"
        },
        {
          "name": "Hasan Hüseyin Bakan & Timur Baltacı",
          "_id": "589a4de4d4c6826122dea30e"
        },
        {
          "name": "Erol Demir & Ahmet Tayfur",
          "_id": "589b9397d4c6826122dea312"
        },
        {
          "name": "Bilgihan Çağlar",
          "_id": "589cebe3d4c6826122dea316"
        },
        {
          "name": "Dursun Seçkin & Samet Topaloğlu",
          "_id": "589ced08d4c6826122dea318"
        },
        {
          "name": "Ferhat Bulut",
          "_id": "589e4651d4c668495513e59e"
        },
        {
          "name": "Haluk Ömeroğlu & Adem Çil",
          "_id": "589e46acd4c668495513e5a0"
        },
        {
          "name": "Cem Yavuz & Yunus Usta",
          "_id": "58a6285dd4c6139e1914a733"
        },
        {
          "name": "Gökhan Baydar",
          "_id": "58a62a82d4c6139e1914a735"
        },
        {
          "name": "Murat Topçu",
          "_id": "58b751eed4c6139e1914a799"
        },
        {
          "name": "Mehmet Doğan",
          "_id": "58bde14ad4c6ba33c1afefcd"
        },
        {
          "name": "Salih Torun (Kapalı Eski Bayilik)",
          "_id": "58bf307ad4c6ba33c1afefd0"
        },
        {
          "name": "Cemil Özçakır",
          "_id": "58c2826c2fbe51b3669c896b"
        },
        {
          "name": "Tuncay Çatalkaya",
          "_id": "58c67b972fbe51b3669cc981"
        },
        {
          "name": "Salih Torun",
          "_id": "59430436ef827b0148dff3f1"
        },
        {
          "name": "Enes Karaca & Şeyda Karal",
          "_id": "5970509254e68301181d7932"
        },
        {
          "name": "Oğuzhan Adalı",
          "_id": "59c2536ae8468524a5e7bb40"
        },
        {
          "name": "Timur Baltacı",
          "_id": "5a160f9ee8468524a5ef6997"
        },
        {
          "name": "Hasan Hüseyin Bakan",
          "_id": "5a160fcbe8468524a5ef6998"
        },
        {
          "name": "Mehmet Yalman",
          "_id": "5ab4beaee8bf7bdc516a9096"
        },
        {
          "name": "Ahmet Safa Kılıç & Mustafa Faruk Akbaş",
          "_id": "5ab4c03fe8bf7bdc516a909b"
        },
        {
          "name": "Uğur Akbaş",
          "_id": "5abf454f666de80408858b6a"
        },
        {
          "name": "Ulutan Yamak & Barış Akbulut",
          "_id": "5af0cfd5d0f1af81c96ad9cc"
        },
        {
          "name": "Berkan Alataş",
          "_id": "5af9f3802d8f6e0e2a53b6aa"
        },
        {
          "name": "Hakkı Köroğlu",
          "_id": "5b3156509d298cd502df6bf7"
        },
        {
          "name": "Kenan Delibaş",
          "_id": "5b31567d9d298cd502df6bf8"
        },
        {
          "name": "Demirağ Lojistik Gıda ve İnşaat İthalat İhracat Limited Şirketi",
          "_id": "5b9928e4c102590004df6427"
        },
        {
          "name": "Hazal Perakende Ürün Loj Ltd Şti",
          "_id": "5c0677863595470018a112d5"
        },
        {
          "name": "Serkan Elbay",
          "_id": "5c0fa109b50db2001dc7b93c"
        },
        {
          "name": "Deng İthalat İhracat İnşaat Tekstil İletişim San ve Tic Ltd Şti",
          "_id": "5c2c6c7c2db70700017d7dfd"
        },
        {
          "name": "Onur Sayan",
          "_id": "5c4eb9eec1b0120001d7866f"
        },
        {
          "name": "Erol Akgün",
          "_id": "5c5aa09b080f130001451490"
        },
        {
          "name": "Vahit Aygör",
          "_id": "5c612664ca50890001ddd330"
        },
        {
          "name": "Ceren Perakende Ürünler Ve Lojistik Limited Şirketi",
          "_id": "5c6e54b95b6cb20001bb2992"
        },
        {
          "name": "Ongu Lojistik Gıda Ve İnşaat İthalat İhracat Ticaret Limited Şirketi",
          "_id": "5c701f3cdab669000191933d"
        },
        {
          "name": "Yiğit Yaman & Mert Yaman Adi Ortaklığı",
          "_id": "5c74dfb2bb1967000103b672"
        },
        {
          "name": "Onur Fatih Aladağ",
          "_id": "5c87da93a2dee400010fc63c"
        },
        {
          "name": "Sait Volkan Karapınar",
          "_id": "5cc05cc7c1d6cb00016cd078"
        },
        {
          "name": "Ali Diler",
          "_id": "5cc152883bf6df0001f9dd93"
        },
        {
          "name": "Tuncay Çağlayan",
          "_id": "5cc885030ed03d0001d8545e"
        },
        {
          "name": "Elif Şahin",
          "_id": "5cff889739a6920001a33434"
        },
        {
          "name": "Okay Lojistik Vahit Aygör ve Ortağı",
          "_id": "5d00e88641ffea000197b1f9"
        },
        {
          "name": "Şeker Metal Lojistik Gıda İnşaat Otomotiv Emlak Sanayi ve Ticaret Anonim Şirketi",
          "_id": "5d2f5bf71c61ae0001bca0ef"
        },
        {
          "name": "Mert Can",
          "_id": "5d3ec57bb04a56000188095f"
        },
        {
          "name": "Tarık Atakan",
          "_id": "5d43f0c7acc5c2000158009c"
        },
        {
          "name": "Yenka Dağıtım ve Gıda Sanayi Ticaret Limited Şirketi",
          "_id": "5d4c1fa5dc53750001111d6a"
        },
        {
          "name": "Tram Lojistik Ticaret Anonim Şirketi",
          "_id": "5d4d23f34809c90001f27e4d"
        },
        {
          "name": "Turgay Yarış",
          "_id": "5d4e7c71290fd200014509c8"
        },
        {
          "name": "Hasan Karaca",
          "_id": "5d62faedda5b2d0001bd7cc2"
        },
        {
          "name": "Rapido Lojistik Gıda ve İnşaat İthalat İhracat Ticaret Limited Şirketi",
          "_id": "5d6304d9da5b2d0001bd8662"
        },
        {
          "name": "Güldane Ural",
          "_id": "5d6e5a25f4c0350001caa563"
        },
        {
          "name": "Mustafa Diler & Emre Orhan Adi Ortaklığı",
          "_id": "5d78e441d555790001fdd057"
        },
        {
          "name": "Kadir Aytar",
          "_id": "5d7fd412acc470000125d9aa"
        },
        {
          "name": "Umta Gıda Lojistik Ticaret Limited Şirketi",
          "_id": "5d88b1c595c05d712e40cc83"
        },
        {
          "name": "Ece Barlas & Neslihan Şahin Adi Ortaklığı",
          "_id": "5d8a0c28334e686ec2e65053"
        },
        {
          "name": "Caspi Pearl Gıda İnşaat Turizm Otomotiv Nakliye Petrol Danışmanlık Sanayi Ve Ticaret Limited Şirketi",
          "_id": "5d8a0ed59b69a06aa72aa3d6"
        },
        {
          "name": "Tek Data Teknoloji Danışmanlık Sanayi ve Ticaret Limited Şirketi",
          "_id": "5d8e86ee503ffb15a5aa6f2b"
        },
        {
          "name": "Rüçhan Özkan",
          "_id": "5d8e8b54503ffb553eaa724d"
        },
        {
          "name": "Vigo Teknoloji ve Lojistik Anonim Şirketi",
          "_id": "5d907252179a0aa4a51a31cd"
        },
        {
          "name": "Getir Perakende Lojistik Anonim Şirketi",
          "_id": "5d907ba8d1991eb92a27d8c1"
        },
        {
          "name": "Zekiye Mataracı & Birsel Mataracı Adi Ortaklığı",
          "_id": "5d910abe6d4dd269fbc09730"
        },
        {
          "name": "Tolga Atik",
          "_id": "5dad5c2a27ede56b8c0f12ca"
        },
        {
          "name": "Adnan Yılmaz",
          "_id": "5db028587282ce14874a642a"
        },
        {
          "name": "Murat Toper",
          "_id": "5db55cee6f1b5e877d511f7b"
        },
        {
          "name": "Samet Çalışır",
          "_id": "5dbaa0e012021a115481e8d1"
        },
        {
          "name": "Yunus Gül & Serhat Duman Adi Ortaklığı",
          "_id": "5dce6a3e2b66a93b42a19154"
        },
        {
          "name": "Cevherun Dağıtım ve Gıda Sanayi Ve Ticaret Limited Şirketi",
          "_id": "5de0ef910caa410baa25f1f0"
        },
        {
          "name": "Ferhat Çoban",
          "_id": "5de8de3249b91968713b7c5d"
        },
        {
          "name": "Murteza Yıldız",
          "_id": "5df39cb79281b7a648c04103"
        },
        {
          "name": "3DSaka Uluslararası İnovatif Proje Danışmanlık Limited Şirketi",
          "_id": "5df40972e5138a5c58a8bace"
        },
        {
          "name": "Erkan Koca",
          "_id": "5e185f745017c32106ad26f9"
        },
        {
          "name": "Bilal Aytar",
          "_id": "5e33df4419720e69b945b039"
        },
        {
          "name": "Ramazan Aytar",
          "_id": "5e342c9f315832ff91f13917"
        },
        {
          "name": "Bora Dağıtım ve Gıda Sanayi Ticaret Limited Şirketi",
          "_id": "5e357c74efc8499f32497d63"
        },
        {
          "name": "Ali Gümen & İbrahim Akdere Adi Ortaklığı",
          "_id": "5e3aa76cfdf97e9bb2abb9f9"
        },
        {
          "name": "Ekrem Eren Erbay",
          "_id": "5e57adde3393d64e0f65b20f"
        },
        {
          "name": "Ömer Diler & Fatih Diler Adi Ortaklığı",
          "_id": "5e60712b07d07847455570fc"
        },
        {
          "name": "Cengiz Türkcan & Güneş Atçeken Adi Ortaklığı",
          "_id": "5e6205b0ccae7d7b17bd73fb"
        },
        {
          "name": "Ramazan Sarıkaya",
          "_id": "5e6260b7ed3159661476aedd"
        },
        {
          "name": "İnovatif İş Geliştirme Ve Taşımacılık Limited Şirketi",
          "_id": "5e7333006415faa9d226d477"
        },
        {
          "name": "Nurhak Furkan Özer",
          "_id": "5e73c07b96539c0adea137d2"
        },
        {
          "name": "Cem Köker",
          "_id": "5e73c361543938f74a4f8459"
        },
        {
          "name": "Mak Otomobil ve İnşaat Sanayi Ticaret Limited Şirketi",
          "_id": "5e7b97e8847389d7f8fc9c0f"
        },
        {
          "name": "Ayşegül Günaltay",
          "_id": "5e7c39194d33098872684262"
        },
        {
          "name": "Ömer Göç",
          "_id": "5e7c8121485047d0ebd8bee1"
        },
        {
          "name": "Emre Orhan & Eren Orhan Adi Ortaklığı",
          "_id": "5e7da51fc4c74c1cd7b1dd04"
        },
        {
          "name": "Getir Perakende Lojistik Anonim Şirketi",
          "_id": "5e0d8a1df0f1d572ab399aaa"
        },
        {
          "name": "Vigo Teknoloji ve Lojistik Anonim Şirketi",
          "_id": "5e160854e7d08e49191bba77"
        },
        {
          "name": "Nursen Kökçay",
          "_id": "5e4cfb438dfb335c12c7b324"
        },
        {
          "name": "Mustafa Mataracı",
          "_id": "5e4cfc878dfb338ec0c7b325"
        },
        {
          "name": "Adem Tan",
          "_id": "5e4fe9ac8dfb33364cc7b327"
        },
        {
          "name": "Doğan Atik",
          "_id": "5e5164608dfb33209dc7b329"
        },
        {
          "name": "Doğan Atik",
          "_id": "5e53a9b60aeef549f21e8420"
        },
        {
          "name": "Sümeyra Timur",
          "_id": "5e53ab8cffd7c6965c6c46c8"
        },
        {
          "name": "Gizem Değirmenci",
          "_id": "5e55873cffd7c64d906c46c9"
        },
        {
          "name": "Adnan yılmaz",
          "_id": "5e55898b8dfb335065c7b32b"
        },
        {
          "name": "ASRIMSAH GIDA TURIZM VE LOJISTIK LIMITED SIRKETI",
          "_id": "5e558e1a0aeef52eb61e8421"
        },
        {
          "name": "Muharrem Özmen",
          "_id": "5e5590310aeef557f91e8422"
        },
        {
          "name": "Melik Duman- Savaş Duman Adi Ortaklığı",
          "_id": "5e559119ffd7c6eb8a6c46cc"
        },
        {
          "name": "Özlüce",
          "_id": "5e5660600aeef53b091e8423"
        },
        {
          "name": "İbrahim Pehlevan& Hülya Karamete",
          "_id": "5e5660fd17aff1035a4e51c0"
        },
        {
          "name": "Oğuzhan Dedemli",
          "_id": "5e5763e8b753362755d6f637"
        },
        {
          "name": "Hasan Demir",
          "_id": "5e57645917aff124864e51c1"
        },
        {
          "name": "Mehtap Bayraktaroğlu & Metin Koyuncu Adi Ortaklığı",
          "_id": "5e58b73e0aeef5291e1e8425"
        },
        {
          "name": "Uğur Bayram Biçer",
          "_id": "5e5915d4b75336c668d6f63c"
        },
        {
          "name": "YAP A.Ş.",
          "_id": "5e597a9317aff16aeb4e51c2"
        },
        {
          "name": "Zihni Musa Sarıkaya",
          "_id": "5e597c190aeef561601e8427"
        },
        {
          "name": "Kazım Burak Omur",
          "_id": "5e5a1b8cb75336fc07d6f640"
        },
        {
          "name": "Aynil Emlak İnşaat İletişim Otomotiv Tekstil Organizasyon Sanayi Ve Dış Ticaret Limit",
          "_id": "5e5a1ec0a6056106402afa6c"
        },
        {
          "name": "BNBA Gıda Lojistik Mühendislik Dağıtım San. ve Tic. Ltd.Şti",
          "_id": "5e6756747c690ea812c5959b"
        },
        {
          "name": "Demtaz",
          "_id": "5e7e1f4eaaa8a10f44f2e478"
        }
      ]
      

    const EXCELFILEPATH = './public/vehicle.xlsx';

    
    
  module.exports = {
    DBS,
    CONSTRAINT_IDS,
    CITIES,
    VEHICLE_STATUSES,
    MERGED_WAREHOUSE_AND_STORES,
    EXCELFILEPATH,
    MERGED_FRANCHISE,
};