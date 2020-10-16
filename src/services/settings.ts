export interface Settings {
  fontSize: number
  darkMode: boolean
}

export interface SettingsResponse {
  status: 'success' | 'error'
  data: {
    settings: Settings
  }
}

export class SettingsService {
  _baseUrl = 'https://wix-workshop-server.herokuapp.com/api/v1'

  _getPath = (endpoint: string) => {
    return `${this._baseUrl}${endpoint}`
  }

  fetchSettings = async () => {
    const path = this._getPath('/settings')
    const response = await fetch(path)
    const {data} = (await response.json()) as SettingsResponse
    return data.settings
  }
}
