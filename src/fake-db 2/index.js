import mock from './mock'


// Apps
import "./data/apps/index.js"

mock.onAny().passThrough(); // forwards the matched request over network
