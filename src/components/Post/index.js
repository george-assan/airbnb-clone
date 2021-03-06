import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/core'

const Post = (props) => {

    const post = props.post;
    const navigation = useNavigation();
    const gotToPostPage = () => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <Pressable onPress={gotToPostPage} style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: post.image }}></Image>

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>


            {/* Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}> ${post.newPrice} </Text>
                / text
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        </Pressable>
    )
}

export default Post
