# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

#### react-router 설치
webBrowser > History > React-Router > React > webBrowser 
```
> npm install --save react-router@2.0.0-rc5
```

#### react-router 연결
... 진행중
```
import { Router, browserHistory } from 'react-router';
...
<Router history={browserHistory} />
```


#### axios와 redux-promise 설치
```
npm install --save axios redux-promise
```

+ index.js
```
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
    promise // 액션 > 프로미스된 미들웨어 > 리듀서 전달
)(createStore);
```
+ reducers/index.js
```
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  post: PostReducer
});
```
+ reducer_posts.js
```
const INITIAL_STATE = {}; // 스테이트 오브젝트 작성

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        default:
            return state;
    }
}
```