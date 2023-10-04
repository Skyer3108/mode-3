const src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
const url='https://api.ipify.org?format=json';
const main=document.getElementById("mainpage");
const btn=document.getElementById("btn-1")



async function fetchip(src1){
    const responce= await fetch(src1);
    const result=await responce.json();
    console.log(result);




    main.innerHTML='';
    const data=document.createElement('div');
    data.className="data";
    data.innerHTML=`
    <div class="second">
    <p id="ip" class="address">IP Address :${result.ip}</p>

    <div class="loc-details">
        <p >Lat:</p>
        <p >City:</p>
        <p>Organisation:</p>
        <p>Long:</p>
        <p>Region:</p>
        <p>Hostname:</p>
    </div>

    <div class="location1">
        <p class="yourloc"> Your Current Location</p>
        <!-- <img class="loc-img" src="#" alt="Laction Image"/> -->
        <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="600" height="300" frameborder="0" style="border:0"></iframe>
        
    </div>

    <div class="more-details">
        <p class="more">
            More Information About YOU
        </p>
        <p class="area">Time Zone:</p>
        <p class="area">Date And Time:</p>
        <p class="area">Pincode:</p>
        <p class="area">Message:Number of pincode found:</p>



    </div>

    <div class="post-off">
<p class="more">More Information About You</p>
<div class="src-btn">

<button class="search" type="submit">src</button> <input class="srcspace" type="text" placeholder="Search By Name"/>



</div>
       

       <div class="postoffice-details">
        <div class="detailsbox">
            <p>Name</p>
            <p>Branch Type</p>
            <p>Delivery Status</p>
            <p>District</p>
            <p>Divison</p>
        </div>
        <div class="detailsbox">
            <p>Name</p>
            <p>Branch Type</p>
            <p>Delivery Status</p>
            <p>District</p>
            <p>Divison</p>
        </div>
        <div class="detailsbox">
            <p>Name</p>
            <p>Branch Type</p>
            <p>Delivery Status</p>
            <p>District</p>
            <p>Divison</p>
        </div>

       </div>

    </div>


</div> 
    `
    main.appendChild(data)

}



btn.addEventListener('click',()=>{
    console.log('hello')
    

fetchip(url)

})