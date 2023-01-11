import { createFollow, deleteFollow, getFollowingUser } from "../repositories/follow.repositories.js"


export async function followOrUnfollow(req, res){

    const {followedId, followerId} = req.body

    const isFollowing = await getFollowingUser(followerId, followedId)

    try {

        if(isFollowing.rows[0]){

            await deleteFollow(followerId, followedId)
    
        }else{
    
            await createFollow(followerId, followedId)
        }

        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}