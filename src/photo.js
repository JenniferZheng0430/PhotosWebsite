var photoCollection = [
{
    id:1,
    src: "Photos/pic1.jpg",
    location:"Aba state",
    year:2017,
    month:7,
    title:"Lost Pedestrain",
    description:""
},
{   
    id:2,
    src: "Photos/pic2.jpg",
    location:"Deyang",
    year:2018,
    month:4,
    title:"My Birthday date",
    description:""
},
{  
    id:3,
    src: "Photos/pic3.jpg",
    location:"Minesota",
    year:2018,
    month:7,
    title:"A special corner of Carleton College",
    description:""
},
{  
    id:4,
    src: "Photos/pic4.jpg",
    location:"Aba State",
    year:2017,
    month:7,
    title:"Prairie Mirror",
    description:""
},
{  
    id:5,
    src: "Photos/pic5.jpg",
    location:"Minesota",
    year:2018,
    month:7,
    title:"feeble street lamp ",
    description:""
},
{  
    id:6,
    src: "Photos/pic6.jpg",
    location:"九曲十八弯",
    year:2016,
    month:7,
    title:"Farewell",
    description:""
},
{  
    id:7,
    src: "Photos/pic7.jpg",
    location:"Deyang",
    year:2015,
    month:3,
    title:"Swan Lake",
    description:""
},
{  
    id:8,
    src: "Photos/pic8.jpg",
    location:"Deyang",
    year:2015,
    month:3,
    title:"Incoming Autumn",
    description:""
},
{  
    id:9,
    src: "Photos/pic9.jpg",
    location:"Deyang",
    year:2018,
    month:4,
    title:"Old Fishman",
    description:""
},
 ]

 var photoCollectionTarget = $('#photoColletion')
 console.log('#photoCollection',photoCollectionTarget)
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 for (i=0;i<photoCollection.length;i++){
    console.log(i)
    console.log(photoCollectionTarget[i])

    var src = photoCollection[i].src
    var location = photoCollection[i].location
    var year = photoCollection[i].year
    var month = photoCollection[i].month
    var title = photoCollectionTarget[i].title


//     <div class="col-md-4">
//     <div class="card mb-4 shadow-sm">
//       <img class="card-img-bottom" src="pic5.jpg" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">
//       <div class="card-body">
//         <p class="card-text">"feeble street lamp"----shot in 2018</p>
//         <div class="d-flex justify-content-between align-items-center">
//           <small class="text-muted">2018 summer Carleton College after party</small>
//         </div>
//       </div>
//     </div>
//   </div>

var makeImage = '<img class="card-img-bottom" src="'+src+'" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">'
var makeText = '<p class="card-text">"'+title+'"----shot in '+year+'.'+month+'</p>'
var makeLocation = '<div class="d-flex justify-content-between align-items-center"><small class="text-muted">'+location+'</small></div>'
var makeBody = '<div class="card-body">'+makeText+makeLocation+'</div>'
var makeCard = '<div class="card mb-4 shadow-sm">'+makeImage+makeBody+'</div>'
var makeCol = '<div class="col-md-4">'+makeCard+'</div>'

photoCollectionTarget.append(makeCol)


 }

