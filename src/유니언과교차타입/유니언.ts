function padLeft(value: string, padding: string | number){
    console.log(`${value} ::: ${padding}`);
}

padLeft("hello world", "12");
padLeft("hello world", 12);

/**
 * 공통 필드를 갖는 유니언
 */
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs(); // 공통 멤버만 접근 가능


/**
 * 유니언 구별하기
 */

type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

type NetworkState =   
| NetworkLoadingState
| NetworkFailedState
| NetworkSuccessState;

function networkStatus(state: NetworkState): string {
    //status.code //오류, 공통 멤버가 아니기 때문이다.

    //switch를 사용하여 해결
    switch(state.state){
        case "loading":
            return "Downloading...";
        case "failed":
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;    
    }
}

/**
 * 교차 타입
 */

interface ErrorHandling {
    success: boolean;
    error?: { message: string}
}

interface ArtworksData {
    artworks: {title: string}[];
}

interface ArtistsData {
    artists: { name: string}[];
}

type ArtworksResponse = ArtistsData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
}




