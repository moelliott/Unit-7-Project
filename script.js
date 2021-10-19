$("button").click(function() {
	let element = $(".zodiac").val();
	let number = $(".number").val();
    let count = 0;
    
    if(element ==="water" || number === "2") {
       $(".message").text("You are a waterbender! You can bend water, ice, blood, spirits, and can even bend water in all three states of matter (solid, liquid, and gas)!"); }
    else if (element ==="fire" || number === "1") {
             $(".message").text("You are a firebender! You can create your own fire, bend fire; including blue fire, and different attacks - and can even bend lightning!"); }
    else if (element ==="earth" || number === "3") {
             $(".message").text("You are a earthbender! You can bend earth, lava, metal, sand, glass, and even create armor using metal and earth!"); }
     else if (element ==="air" || number === "4") {
             $(".message").text("You are a airbender! You can bend air, fly, and you even have advanced speed and agility!"); }
    count = count + 1;
    $(".counter").text("This quiz was taken " + count + " time(s)");
});
