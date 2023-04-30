import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    rootConatiner: {
        flex: 1,
        alignItems: "center"
    },
    scoreView: {
        marginTop: 20,
        flexDirection: "row"
    },
    overView: { 
        width: "50%", 
        alignItems: "center" 
    },
    runView: {
        width: "50%", 
        alignItems: "flex-end", 
        marginRight: 100 
    },
    scoreText: { 
        fontSize: 15, 
        color: "grey", 
        marginTop: 10 
    },
    runTextSize: { 
        fontSize: 50 
    },
    runsText: { 
        fontSize: 15, 
        color: "grey" 
    },
    individualScoreView: { 
        marginTop: 100, 
        height: "35%", 
        width: "60%", 
        borderColor: "grey", 
        borderWidth: 2, 
        alignItems: "center" 
    },
    firstPlayerText: { 
        fontSize: 15, 
        color: "grey", 
        marginTop: 10 
    },
    secondPlayerText: { 
        fontSize: 15, 
        color: "grey", 
        marginTop: 200 
    },
    bowlButtonView: { 
        marginTop: 200, 
        height: "7%", 
        width: "90%", 
        borderColor: "grey", 
        borderWidth: 2, 
        alignItems: "center", 
        justifyContent: "center" 
    },
});
