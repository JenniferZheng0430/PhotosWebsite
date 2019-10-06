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
var makeLocation = '<div class="d-flex justify-content-between align-items-center"><small class="text-muted">'+where+'</small></div>'
var makeBody = '<div class="card-body">'+makeText+makeLocation+'</div>'
var makeCard = '<div class="card mb-4 shadow-sm">'+makeImage+makeBody+'</div>'
var makeCol = '<div class="col-md-4">'+makeCard+'</div>'

console.log(makeCol)
selectivePhotoTarget.append(makeCol)


 }

