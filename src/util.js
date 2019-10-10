export const addClassToElement = (element, className) => 
{
	if (element.props.className)
	{
		return {
			...element,
			props: {
				...element.props,
				className: element.props.className + ' ' + className
			}
		}
	} else {
		return {
			...element,
			props: {
				...element.props,
				className: className
			}
		}
	}
}