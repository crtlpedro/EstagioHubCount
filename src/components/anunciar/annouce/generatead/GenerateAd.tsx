import React from 'react'
import AnnounceTitle from '../title/AnnounceTitle'
import AnnouncePrice from '../price/AnnouncePrice'
import AnnounceType from '../type/AnnouceType'
import AnnounceCategory from '../category/AnnounceCategory'
import AnnounceDescription from '../description/AnnounceDescription'
import AdImage from '../adimage/AdImage'
import FinishPost from '../finishpost/FinishPost'

const GenerateAd = () => {
  return (
    <div>
        <AnnounceTitle/>
        <AnnouncePrice/>
        <AnnounceType/>
        <AnnounceCategory/>
        <AnnounceDescription/>
        <AdImage/>
        <FinishPost/>
    </div>
  )
}

export default GenerateAd