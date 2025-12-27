

const useProviderFilter = (games, provider) => {
    const filterProviders = games.map((game) => {
        if(game.provider === provider) return game
    })

    const showMoreGames = (page) => {
        let gamesList = filterProviders.map((providers, k) => {
            if(k < page * 30){
                return provider
            }
        })
    }


}

export default games