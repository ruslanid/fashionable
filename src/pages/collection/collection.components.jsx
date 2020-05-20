import React from 'react';

const CollectionPage = ({match}) => (
  <div>
    {match.params.collectionId}
  </div>
);

export default CollectionPage;