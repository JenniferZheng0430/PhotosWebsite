//script for selective photos
var selectivePhotoTarget = $('#selective-photo')
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var data = selectivePhoto

console.log(data)
 for (i=0;i<data.length;i++){
     console.log(i)
    var item      = data[i]

    var src       = item.src
    var where     = item.where
    var year      = item.year
    var month     = item.month
    var title     = item.title


  //   <div class="col-md-4">
  //   <div class="card mb-4 shadow-sm">
  //      <a href="bgPhoto.jpg" data-lightbox="roadtrip">
  //     <img class="card-img-bottom" src="pic5.jpg" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">
  //       <a/>
  //     <div class="card-body">
  //       <p class="card-text">"feeble street lamp"----shot in 2018</p>
  //       <div class="d-flex justify-content-between align-items-center">
  //         <small class="text-muted">2018 summer Carleton College after party</small>
  //       </div>
  //     </div>
  //   </div>
  // </div>
{/* <a href="bgPhoto.jpg" data-lightbox="roadtrip">
          <img src="bgPhoto.jpg">
        </a> */}

var makeImage = '<img class="card-img-bottom" style="-webkit-box-shadow: 0px 0px 10px 0px #000000;" src="'+src+'" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Waiting for image loading">'
var makeLightBox = '<a href="'+src+'" data-lightbox="roadtrip">'+makeImage+'</a>'
var makeText = '<p class="card-text">"'+title+'"----shot in '+year+'.'+month+'</p>'
var makeLocation = '<div class="d-flex justify-content-between align-items-center"><small class="text-muted">'+where+'</small></div>'
var makeBody = '<div class="card-body" style="background-color:#fafafa;">'+makeText+makeLocation+'</div>'
var makeCard = '<div class="card mb-4" style="border:none;">'+makeLightBox+makeBody+'</div>'
var makeCol = '<div class="col-md-4">'+makeCard+'</div>'

console.log(makeCol)
selectivePhotoTarget.append(makeCol)


 }

