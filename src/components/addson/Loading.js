import React from 'react'
import LoadingOverlay from 'react-loading-overlay';
import SyncLoader from 'react-spinners/BounceLoader'

function Loading(props) {
    return (
        <LoadingOverlay
            active={props.isActive}
            spinner={<SyncLoader/>}
            text='Loading...'
            styles={{
                wrapper: {
                  width: '10px',
                  height: '10px',
                  overflow: props.isActive ? 'hidden' : 'scroll'
                },
                // overlay: (base) => ({
                //     ...base,
                //     background: 'rgba(255, 255, 0, 0.5)'
                //   })
              }}
            >
        </LoadingOverlay>
    )
}

export default Loading
