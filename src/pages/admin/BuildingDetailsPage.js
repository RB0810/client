import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AccountManager from "../../managers/accountmanager";
import BuildingDetails from "../../components/BuildingDetails";

const BuildingDetailsPage = () => {
  const [buildingDetails, setBuildingDetails] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const { BuildingID } = useParams();
  const { AdminID } = useParams();
  const accountManager = new AccountManager();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuildingDetails = async () => {
      try {
        const buildingData = await accountManager.getBuildingDetails(
          BuildingID
        );
        setBuildingDetails(buildingData);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching building details:", error);
      }
    };

    fetchBuildingDetails();
  }, [BuildingID]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        buildingDetails && (
          <>
            <h1>{buildingDetails.Building.BuildingName}</h1>
            <h2>{buildingDetails.Building.Address}, {buildingDetails.Building.PostalCode}</h2>
            <hr></hr>
            <BuildingDetails building={buildingDetails} />
          </>
        )
      )}
    </div>
  );
};

export default BuildingDetailsPage;
