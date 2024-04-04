import { IMAGES } from "../../../constants/images";
import './LeadsInfo.scss'

const LeadsInfo = ({ data }) => {

    return (
        <div className="leadsContainer">
            <div className="titleLead">{data?.leadTitle}</div>
            <div className="descriptionLead">{data?.leadsDescription}</div>

            <div className="d-flex space between mb-4">
                <div className="locationLead">
                    <img
                        className="leadslocationicon"
                        src={IMAGES.Location}
                        alt="location"
                    />
                    <span className="leadslocationtext">{data?.location}</span>
                </div>
                <div className="priceLeads">
                    <span className="priceText">{data?.pricingRange?.currency}</span>
                    <span className="priceamount">{data?.pricingRange?.maxValue} - </span>
                    <span className="priceamount">{data?.pricingRange?.minValue}</span>
                </div>
            </div>


            <div className="leadscategory">{data?.industry?.value}</div>

            <div className="leadbuttoncontainer">
                <div className="leadsbutton">
                    Reply
                </div>
            </div>

        </div>
    );
};

export default LeadsInfo;
