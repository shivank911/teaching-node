









async function createReview (){
    let review={
        review:"good",
        rating:"5",
    };
    let data=await reviewModel.create(review);
    console.log(data);
}

// createReview();








//server apne refreh ho 
// ki posting database par ho 

