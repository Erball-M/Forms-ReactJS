import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

const usePageAccessibility = () => {
    const { pathname } = useLocation()
    const allowedPages = useSelector(state => state.forms.allowedPages)

    const isAllowed = allowedPages.includes(pathname)

    return isAllowed
}

export { usePageAccessibility }