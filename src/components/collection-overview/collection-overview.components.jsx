import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../preview-collection/preview-collection.component'
import './collection-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
         {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)