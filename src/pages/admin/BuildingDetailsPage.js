import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AccountManager from '../../managers/AccountManager';
import BuildingDetails from '../../components/BuildingDetails';

const BuildingDetailsPage = () => {
  const [buildingDetails, setBuildingDetails] = useState(null);
  const { BuildingID } = useParams();
  const accountManager = new AccountManager();

  useEffect(() => {
    const fetchBuildingDetails = async () => {
      try {
        const buildingData = await accountManager.getBuildingDetails(BuildingID);
        setBuildingDetails(buildingData);
      } catch (error) {
        console.error('Error fetching building details:', error);
      }
    };

    fetchBuildingDetails();
  }, [BuildingID]);

  return (
    <div>
      {buildingDetails && <BuildingDetails building={buildingDetails} />}
    </div>
  );
};

export default BuildingDetailsPage;