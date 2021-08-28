 var names = ["Family Book", "Rosalyn", "Gloria", "Amy"];
 var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg"];
 var i = 0;
 
function update()
{
    i++;

    var length = 4;

    if(i > length)
    {
        i = 0
    }

    var updateimages = images[i];
    var updatenames = names[i]
    document.getElementById("family_member_image").src = updateimages;
    document.getElementById("family_member_name").innerHTML = updatenames;
} 