   const BrandCard = ({ cloth }) => {
   const {_id, image} = cloth
  return (
    <div className="flex gap-4">

      <img className="w-36" src={image} alt="" />
    </div>
  );
};

export default BrandCard;
