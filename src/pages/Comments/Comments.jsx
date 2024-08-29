import {Ratings, Testimonials, HowDifferent, MyBio, Needs, NoNeeds, Comments} from './ImportsLowerProfileData'

const LowerProfileData = ({ rgba,isLive, productionUrl, setShowVerifiedPopup,baseColor
}) => {

    return (
        <>
            <Comments rgba={rgba} productionUrl={productionUrl} isLive={isLive} setShowVerifiedPopup={setShowVerifiedPopup} 
            baseColor={baseColor} />
        </>
    )
}

export default LowerProfileData
