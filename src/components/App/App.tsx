import { ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material'
import { 
  Close as CloseIcon, 
  MyLocation as MyLocationIcon,
  Place as PlaceIcon, 
  LayersClear as LayersClearIcon, 
} from '@mui/icons-material';

function App() {

  return (
    <>
      <ToggleButtonGroup>
        <Tooltip title="Set wall">
          <ToggleButton value={1}>
            <CloseIcon />
          </ToggleButton>
        </Tooltip>
        
        <Tooltip title="Set start point">
          <ToggleButton value={1}>
            <MyLocationIcon />
          </ToggleButton>
        </Tooltip>

        <Tooltip title="Set finish point">
          <ToggleButton value={3}>
            <PlaceIcon />
          </ToggleButton>
        </Tooltip>
        
        <Tooltip title="Clear grid">
          <ToggleButton value={4}>
            <LayersClearIcon />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </>
  )
}

export default App
